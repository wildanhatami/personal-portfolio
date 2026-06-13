import { fetchGitHubUser, fetchGitHubRepoStats } from "@/app/lib/githubStats";
import AboutSectionClient from "./AboutSectionClient";

const GITHUB_USERNAME = "wildanhatami";

export default async function AboutSection() {
  const [user, repos] = await Promise.all([
    fetchGitHubUser(GITHUB_USERNAME),
    fetchGitHubRepoStats(GITHUB_USERNAME),
  ]);

  return <AboutSectionClient user={user} repos={repos} username={GITHUB_USERNAME} />;
}
