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
    return content;
  } catch {
    return null;
  }
}
