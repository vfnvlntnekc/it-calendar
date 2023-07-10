import { $host } from "./index";
const HOST = "http://localhost:8080/";

export const fetchProjects = async () => {
  const { data } = await $host.get("project/projects");
  return { data };
};

export const fetchProjectInfo = async (projectId) => {
  const { data } = await $host.get("project/projects/" + projectId);
  return { data };
};

export const fetchSteps = async (projectId) => {
  const { data } = await $host.get("project/" + projectId + "/steps");
  return { data };
};

export const fetchTasks = async (projectId, stepId) => {
  const { data } = await $host.get(
    "project/" + projectId + "/" + stepId + "/tasks"
  );
  return data;
};

export const fetchPeople = async () => {
  const { data } = await $host.get("project/users");
  console.log(data);
  return { data };
};

export const createProject = async (project) => {
  const { data } = await $host.post("project/projects", project);
  return data;
};
export const createStep = async (projectId, step) => {
  const { data } = await $host.post("project/" + projectId + "/steps", step);
  return data;
};
export const createTask = async (projectId, stepId, task) => {
  const { data } = await $host.post(
    "project/" + projectId + "/" + stepId + "/tasks",
    task
  );
  return data;
};
