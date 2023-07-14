import { observer } from "mobx-react-lite";
import { Button, Grid, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { createProject } from "../requests/problemAPI";
import { useNavigate } from "react-router-dom";

const AddProject = observer(() => {
  const paperStyle = { width: 500, background: "#F8F8F8" };
  const marginStyle = { margin: "10px 0" };
  const gridStyle = { height: "100vh", width: "vmax", background: "#F8F8F8" };

  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectBegin, setProjectBegin] = useState("");
  const [projectEnd, setProjectEnd] = useState("");

  const navigate = useNavigate();

  const addProject = () => {
    createProject({
      name: projectName,
      project_description: projectDescription,
      date_begin_project: projectBegin,
      date_complete_project: projectEnd,
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
            <h2>Добавление проекта</h2>
            Пожалуйста, введите данные.
            <TextField
              label="Название проекта"
              placeholder="Введите название проекта"
              variant="outlined"
              style={marginStyle}
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              fullWidth
            ></TextField>
            <TextField
              label="Описание"
              multiline
              placeholder="Введите описание проекта"
              rows={4}
              variant="outlined"
              style={marginStyle}
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
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
              value={projectBegin}
              onChange={(e) => setProjectBegin(e.target.value)}
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
              value={projectEnd}
              onChange={(e) => setProjectEnd(e.target.value)}
              fullWidth
            />
            <Button
              type="submit"
              style={marginStyle}
              variant="contained"
              color="primary"
              onClick={addProject}
              fullWidth
            >
              Добавить проект
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
});

export default AddProject;
