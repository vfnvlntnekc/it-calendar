import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import CalendarIT from "../components/CalendarIT";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { Context } from "..";
import {
  fetchPeople,
  fetchProjects,
  fetchProjectsCalendar,
  fetchSteps,
  fetchTasks,
  getProject,
} from "../requests/problemAPI";
import AddStep from "../components/AddStep";
import CalendarProject from "../components/CalendarProject";

const MainPage = observer(() => {
  const { problem } = useContext(Context);
  const [project, setProject] = useState("");
  const [step, setStep] = useState("");

  useEffect(() => {
    fetchProjects()
      .then((data) => {
        problem.setProjects(data);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    fetchSteps(problem.selectedProject).then((data) => {
      problem.setSteps(data);
    });
  }, [problem.selectedProject]);
  useEffect(() => {}, [problem.selectedStep]);

  const handleChangeProject = (event) => {
    setProject(event.target.value);
    problem.setSelectedProject(event.target.value);
  };
  const handleChangeStep = (event) => {
    setStep(event.target.value);
    problem.setSelectedStep(event.target.value);
  };
  const gridStyle = { height: "100vh", width: "vmax", background: "#F8F8F8" };
  console.log(problem);
  return (
    <Grid style={gridStyle}>
      <FormControl style={{ width: "20vw", margin: 10 }}>
        <InputLabel>Проект</InputLabel>
        <Select value={project} onChange={handleChangeProject}>
          {problem.projects.data?.map((project) => (
            <MenuItem key={project.project_id} value={project.project_id}>
              {project.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl style={{ width: "20vw", margin: 10 }}>
        <InputLabel>Этап</InputLabel>
        <Select value={step} onChange={handleChangeStep}>
          {problem.steps.data?.map((step) => (
            <MenuItem key={step.step_id} value={step.step_id}>
              {step.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <CalendarIT />
    </Grid>
  );
});

export default MainPage;
