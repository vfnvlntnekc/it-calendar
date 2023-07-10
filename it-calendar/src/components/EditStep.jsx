import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "..";
import { fetchProjects, fetchSteps } from "../requests/problemAPI";
import { useNavigate } from "react-router-dom";

const EditStep = () => {
  const { problem } = useContext(Context);
  const paperStyle = { width: 500, background: "#F8F8F8" };
  const marginStyle = { margin: "10px 0" };
  const gridStyle = { height: "100vh", width: "vmax", background: "#F8F8F8" };

  const [projectName, setProjectName] = useState([]);
  const [project, setProject] = useState("");
  const [step, setStep] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects()
      .then((data) => problem.setProjects(data))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    fetchSteps(problem.selectedProject).then((data) => {
      problem.setSteps(data);
    });
  }, [project]);

  useEffect(() => {
    navigate("/editProject/" + project + "/" + step);
  }, [problem.selectedProject]);

  const handleChangeProject = (event) => {
    setProject(event.target.value);
    problem.setSelectedProject(event.target.value);
    console.log(event.target.value);
  };

  const handleChangeStep = (event) => {
    setStep(event.target.value);
    problem.setSelectedStep(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Grid container style={gridStyle}>
      <Grid
        item
        container
        xs={12}
        direction="row"
        justifyContent="center"
        alignItems="top"
      >
        <Paper align="center" elevation={0} style={paperStyle}>
          <Grid>
            <h2>Изменение этапа</h2>
            Пожалуйста, введите данные.
            <div></div>
            <FormControl fullWidth>
              <InputLabel>Проект</InputLabel>
              <Select value={project} onChange={handleChangeProject}>
                {problem.projects.data?.map((project) => (
                  <MenuItem key={project.project_id} value={project.project_id}>
                    {project.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Этап</InputLabel>
              <Select value={step} onChange={handleChangeStep}>
                {problem.steps.data?.map((step) => (
                  <MenuItem key={step.step_id} value={step.step_id}>
                    {step.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              type="submit"
              style={marginStyle}
              variant="contained"
              color="primary"
              onClick={navigate("/editProject/" + project + "/" + step)}
              fullWidth
            >
              Добавить этап
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default EditStep;
