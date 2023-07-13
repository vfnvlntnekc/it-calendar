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
import {
  createTask,
  fetchPeople,
  fetchProjects,
  fetchSteps,
} from "../requests/problemAPI";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const { problem } = useContext(Context);

  const paperStyle = { width: 500, background: "#F8F8F8" };
  const marginStyle = { margin: "10px 0" };
  const gridStyle = { height: "100vh", width: "vmax", background: "#F8F8F8" };
  const [people, setPeople] = useState([]);
  const [project, setProject] = useState("");
  const [step, setStep] = useState("");

  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskBegin, setTaskBegin] = useState("");
  const [taskEnd, setTaskEnd] = useState("");

  const navigate = useNavigate();

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
      console.log(problem);
    });
  }, [problem.selectedProject]);

  const addTask = () => {
    createTask(problem.selectedProject, problem.selectedStep, {
      task_name: taskName,
      task_description: taskDescription,
      date_begin_task: taskBegin,
      date_complete_task: taskEnd,
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
            <h2>Добавление задачи</h2>
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
            <TextField
              label="Название задачи"
              placeholder="Введите название задачи"
              variant="outlined"
              style={marginStyle}
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              fullWidth
            ></TextField>
            <TextField
              label="Описание"
              multiline
              placeholder="Введите описание задачи"
              rows={4}
              variant="outlined"
              style={marginStyle}
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              fullWidth
            />
            <TextField
              label="Время начала"
              type="datetime-local"
              defaultValue="2023-07-07T10:30"
              InputLabelProps={{
                shrink: true,
              }}
              style={marginStyle}
              value={taskBegin}
              onChange={(e) => setTaskBegin(e.target.value)}
              fullWidth
            />
            <TextField
              label="Время окончания"
              type="datetime-local"
              defaultValue="2023-07-07T11:30"
              InputLabelProps={{
                shrink: true,
              }}
              style={marginStyle}
              value={taskEnd}
              onChange={(e) => setTaskEnd(e.target.value)}
              fullWidth
            />
            <Button
              type="submit"
              style={marginStyle}
              variant="contained"
              color="primary"
              onClick={addTask}
              fullWidth
            >
              Добавить задачу
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AddTask;
