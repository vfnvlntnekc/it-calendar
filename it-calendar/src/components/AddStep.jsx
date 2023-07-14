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
import { useNavigate } from "react-router-dom";
import { createStep, fetchProjects } from "../requests/problemAPI";
import { observer } from "mobx-react-lite";

const AddStep = observer(() => {
  const { problem } = useContext(Context);

  const paperStyle = { width: 500, background: "#F8F8F8" };
  const marginStyle = { margin: "10px 0" };
  const gridStyle = { height: "100vh", width: "vmax", background: "#F8F8F8" };

  const [project, setProject] = useState("");
  const [stepName, setstepName] = useState("");
  const [stepDescription, setstepDescription] = useState("");
  const [stepBegin, setstepBegin] = useState("");
  const [stepEnd, setstepEnd] = useState("");

  const navigate = useNavigate();

  const handleChangeProject = (event) => {
    setProject(event.target.value);
    problem.setSelectedProject(event.target.value);
    console.log(event.target.value);
  };
  useEffect(() => {
    fetchProjects()
      .then((data) => {
        problem.setProjects(data);
      })
      .catch((e) => console.log(e));
  }, []);
  console.log(problem);
  const addStep = () => {
    createStep(problem.selectedProject, {
      name: stepName,
      step_description: stepDescription,
      date_begin_step: stepBegin,
      date_complete_step: stepEnd,
    }).then((data) => console.log(data));
    navigate("/");
  };

  return (
    <Grid container style={gridStyle}>
      <Grid
        item
        container
        xs={12}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Paper align="center" elevation={0} style={paperStyle}>
          <Grid>
            <h2>Добавление этапа</h2>
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
            <TextField
              label="Название этапа"
              placeholder="Введите название этапа"
              variant="outlined"
              style={marginStyle}
              value={stepName}
              onChange={(e) => setstepName(e.target.value)}
              fullWidth
            ></TextField>
            <TextField
              label="Описание"
              multiline
              placeholder="Введите описание этапа"
              rows={4}
              variant="outlined"
              style={marginStyle}
              value={stepDescription}
              onChange={(e) => setstepDescription(e.target.value)}
              fullWidth
            />
            <TextField
              label="Время начала"
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
              style={marginStyle}
              value={stepBegin}
              onChange={(e) => setstepBegin(e.target.value)}
              fullWidth
            />
            <TextField
              label="Время окончания"
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
              style={marginStyle}
              value={stepEnd}
              onChange={(e) => setstepEnd(e.target.value)}
              fullWidth
            />
            <Button
              type="submit"
              style={marginStyle}
              variant="contained"
              color="primary"
              onClick={addStep}
              fullWidth
            >
              Добавить этап
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
});

export default AddStep;
