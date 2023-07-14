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
import { fetchProjectInfo, fetchProjects } from "../requests/problemAPI";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

const EditProject = observer(() => {
  const { problem } = useContext(Context);
  const paperStyle = { width: 500, background: "#F8F8F8" };
  const marginStyle = { margin: "10px 0" };
  const gridStyle = { height: "100vh", width: "vmax", background: "#F8F8F8" };
  const [project, setProject] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("лулул");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects()
      .then((data) => problem.setProjects(data))
      .catch((e) => console.log(e));
  }, []);

  const handleChangeProject = (event) => {
    setProject(event.target.value);
    problem.setSelectedProject("");
    console.log(project);
  };

  /*useEffect(() => {
    fetchProjectInfo(problem.selectedProject).then((data) => {
      setName(data.name);
      setDescription(data.project_description);
      // = data.problem.setSelectedProjectInfo(data);
      console.log(data);
    });
  }, [problem.selectedProject]);*/

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
            <h2>Изменение проекта</h2>
            Пожалуйста, выберите проект
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
            <Button
              type="submit"
              style={marginStyle}
              variant="contained"
              color="primary"
              onClick={navigate("/editProject/" + project)}
              fullWidth
            >
              Изменить проект
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
});

export default EditProject;
