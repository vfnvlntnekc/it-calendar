import { makeAutoObservable } from "mobx";

export default class ProblemStore {
  constructor() {
    this._projects = [];
    this._steps = [];
    this._tasks = [];
    this._people = [];
    this._selectedProject = {};
    this._selectedStep = {};
    this._selectedTask = {};
    this._selectedPeople = [];
    this._selectedProjectInfo = [
      {
        project_id: 0,
        name: "0",
        project_description: "0",
        date_begin_project: "2023-05-01T00:00:00",
        date_complete_project: "2023-08-15T00:00:00",
      },
    ];
    makeAutoObservable(this);
  }

  setProjects(projects) {
    this._projects = projects;
  }
  setSteps(steps) {
    this._steps = steps;
  }
  setTasks(tasks) {
    this._tasks = tasks;
  }
  setPeople(people) {
    this._people = people;
  }
  setSelectedProject(project) {
    this._selectedProject = project;
  }
  setSelectedStep(step) {
    this._selectedStep = step;
  }
  setSelectedTask(task) {
    this._selectedTask = task;
  }
  setSelectedPeople(people) {
    this._selectedPeople = people;
  }
  setSelectedProjectInfo(selectedProjectInfo) {
    this._selectedProjectInfo = selectedProjectInfo;
  }

  get projects() {
    return this._projects;
  }
  get steps() {
    return this._steps;
  }
  get tasks() {
    return this._tasks;
  }
  get people() {
    return this._people;
  }
  get selectedProject() {
    return this._selectedProject;
  }
  get selectedStep() {
    return this._selectedStep;
  }
  get selectedTask() {
    return this._selectedTask;
  }
  get selectedPeople() {
    return this._selectedPeople;
  }
  get selectedProjectInfo() {
    return this._selectedProjectInfo;
  }
}
