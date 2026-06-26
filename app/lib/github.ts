/**
 * GitHub README Fetcher
 * Fetches the README.md content from a public GitHub repository.
 * Returns null if the repo is private, doesn't have a README, or rate limit is hit.
 */
export async function fetchReadme(repo: string): Promise<string | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}/readme`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "portfolio-site",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) return null;

    const data = await res.json();

    // GitHub returns content as base64
    const content = Buffer.from(data.content, "base64").toString("utf-8");

    if (!data.download_url) return content;

    // Get the base raw URL (e.g. https://raw.githubusercontent.com/owner/repo/main)
    const baseUrl = data.download_url.split("/").slice(0, -1).join("/");

    // Convert relative image URLs (Markdown & HTML) to absolute GitHub raw URLs
    const fixedContent = content
      // Markdown images: ![alt](path) -> path not starting with http
      .replace(/!\[([^\]]*)\]\((?!http)(.*?)\)/g, (match, alt, path) => {
        // Remove leading ./ or /
        const cleanPath = path.replace(/^\.\//, "").replace(/^\//, "");
        return `![${alt}](${baseUrl}/${cleanPath})`;
      })
      // HTML images: <img src="path" /> -> path not starting with http
      .replace(/<img([^>]+)src=["'](?!http)(.*?)["']/gi, (match, prefix, path) => {
        const cleanPath = path.replace(/^\.\//, "").replace(/^\//, "");
        return `<img${prefix}src="${baseUrl}/${cleanPath}"`;
      });

    return fixedContent;
  } catch {
    return null;
  }
}
