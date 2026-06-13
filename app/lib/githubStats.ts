/**
 * GitHub Stats Fetcher
 * Fetches public stats for a GitHub user via the GitHub REST API.
 */

export interface GitHubUserStats {
  login: string;
  name: string;
  publicRepos: number;
  followers: number;
  following: number;
  avatarUrl: string;
  bio: string | null;
}

export interface GitHubRepoStats {
  totalStars: number;
  topLanguages: { language: string; count: number }[];
}

export async function fetchGitHubUser(username: string): Promise<GitHubUserStats | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "portfolio-site",
      },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      login: data.login,
      name: data.name,
      publicRepos: data.public_repos,
      followers: data.followers,
      following: data.following,
      avatarUrl: data.avatar_url,
      bio: data.bio,
    };
  } catch {
    return null;
  }
}

export async function fetchGitHubRepoStats(username: string): Promise<GitHubRepoStats> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "portfolio-site",
        },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return { totalStars: 0, topLanguages: [] };

    const repos = await res.json();

    // Total stars
    const totalStars = repos.reduce(
      (acc: number, repo: { stargazers_count: number }) => acc + repo.stargazers_count,
      0
    );

    // Count languages
    const langCount: Record<string, number> = {};
    for (const repo of repos) {
      if (repo.language) {
        langCount[repo.language] = (langCount[repo.language] || 0) + 1;
      }
    }
    const topLanguages = Object.entries(langCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([language, count]) => ({ language, count }));

    return { totalStars, topLanguages };
  } catch {
    return { totalStars: 0, topLanguages: [] };
  }
}
