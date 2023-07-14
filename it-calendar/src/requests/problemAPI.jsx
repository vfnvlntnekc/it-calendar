import { $host } from "./index";

export const fetchProjects = async () => {
  const { data } = await $host.get("project/projects");
  return { data };
};

export const fetchProjectsCalendar = async () => {
  const { data } = await $host.get("project/projects");
  return data;
};

export const fetchProjectInfo = async (projectId) => {

  const { data } = await $host.get("project/" + projectId);
  return { data };
  
};

export const createProject = async (project) => {
  const { data } = await $host.post("project/projects", project);
  return data;
};

export const updateProject = async (projectId, project) => {
  const { data } = await $host.put("project/" + projectId, project);
  return data;
  
};

export const deleteProject = async (projectId) => {
  const { data } = await $host.delete("project/" + projectId);
  return { data };
  
};

export const fetchSteps = async (projectId) => {
  if (Number.isInteger(projectId)){
  const { data } = await $host.get("project/" + projectId + "/steps");
  return { data };
  } else {
    const { data } = {};
  return { data };
  }
};

export const fetchStepInfo = async (projectId, stepId) => {
  if (Number.isInteger(projectId)){
  const { data } = await $host.get("project/" + projectId + "/" + stepId);
  return { data };
  }else {
    const { data } = {};
  return { data };
  }
};

export const deleteStep = async (projectId, stepId) => {
  if (Number.isInteger(projectId)){
  const { data } = await $host.delete("project/" + projectId + "/" + stepId);
  return { data };
  }else {
    const { data } = {};
  return { data };
  }
};

export const createStep = async (projectId, step) => {
  if (Number.isInteger(projectId)){
  const { data } = await $host.post("project/" + projectId + "/steps", step);
  return data;
  }else {
    const { data } = {};
  return { data };
  }
};

export const updateStep = async (projectId, stepId, step) => {
  if (Number.isInteger(projectId)){
  const { data } = await $host.put("project/" + projectId + "/" + stepId, step);
  return data;
  }else {
    const { data } = {};
  return  data ;
  }
};

export const fetchTasksCalendar = async (projectId, stepId) => {
  if (Number.isInteger(projectId)&& Number.isInteger(stepId)){
  const { data } = await $host.get(
    "project/" + projectId + "/" + stepId + "/tasks"
  );
  return data;
  }
  // else {
  //   const { data } = {};
  // return { data };
  // }
};

export const fetchTasks = async (projectId, stepId) => {
  if (Number.isInteger(projectId) && Number.isInteger(stepId)){
  const { data } = await $host.get(
    "project/" + projectId + "/" + stepId + "/tasks"
  );
  return { data };
  }
  // else {
  //   const { data } = {};
  // return { data };
  // }
};

export const deleteTask = async (projectId, stepId, task_id) => {
  if (Number.isInteger(projectId) && Number.isInteger(stepId)){

  const { data } = await $host.delete(
    "project/" + projectId + "/" + stepId + "/" + task_id
  );
  return { data };
  }
  // else {
  //   const { data } = {};
  // return { data };
  // }
};

export const createTask = async (projectId, stepId, task) => {
  if (Number.isInteger(projectId) && Number.isInteger(stepId)){
  const { data } = await $host.post(
    "project/" + projectId + "/" + stepId + "/tasks",
    task
  );
  return data;
  }
  // else {
  //   const { data } = {};
  // return { data };
  // }
};

export const fetchPeople = async () => {
  const { data } = await $host.get("project/users");
  console.log(data);
  return { data };
};
