import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

interface Creator {
  uid: string;
  email: string;
  username: string;
  githubLogin: string;
}

interface Meta {
  githubCommitAuthorName: string;
  githubCommitMessage: string;
  githubCommitOrg: string;
  githubCommitRef: string;
  githubCommitRepo: string;
  githubCommitSha: string;
  githubDeployment: string;
  githubOrg: string;
  githubRepo: string;
  githubRepoOwnerType: string;
  githubCommitRepoId: string;
  githubRepoId: string;
  githubRepoVisibility: string;
  githubCommitAuthorLogin: string;
  branchAlias: string;
}

interface ProjectSettings {
  commandForIgnoringBuildStep: null;
}

interface Deployment {
  uid: string;
  name: string;
  url: string;
  created: number;
  source: string;
  state: string;
  readyState: string;
  readySubstate: string;
  type: string;
  creator: Creator;
  inspectorUrl: string;
  meta: Meta;
  target: string;
  aliasError: null;
  aliasAssigned: number;
  isRollbackCandidate: boolean;
  createdAt: number;
  buildingAt: number;
  ready: number;
  projectSettings: ProjectSettings;
}

interface Pagination {
  count: number;
  next: number;
  prev: number;
}

interface DeploymentResponse {
  deployments: Deployment[];
  pagination: Pagination;
}

export const loader: LoaderFunction = async ({ request }) => {
  try {
    const token = import.meta.env.VITE_VERCEL_TOKEN;
    const projectId = import.meta.env.VITE_VERCEL_PROJECT_ID;

    if (!token || !projectId) {
      return json({ error: "Missing required credentials" }, { status: 401 });
    }

    const searchParams = new URLSearchParams({
      projectId,
      limit: "1",
    });

    const response = await fetch(
      `https://api.vercel.com/v6/deployments?${searchParams.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "get",
      }
    );

    const data = await response.json();

    if (!response.ok || "error" in data) {
      return json(
        { error: "Failed to fetch deployment data" },
        { status: response.status }
      );
    }

    const deploymentResponse = data as DeploymentResponse;
    if (deploymentResponse.deployments.length === 0) {
      return json({ error: "No deployments found" }, { status: 404 });
    }

    const readyTimestamp = deploymentResponse.deployments[0].ready;

    return json({ deploymentReadyDate: readyTimestamp });
  } catch (error) {
    console.error("Error fetching deployment data:", error);
    return json({ error: "Internal server error" }, { status: 500 });
  }
};
