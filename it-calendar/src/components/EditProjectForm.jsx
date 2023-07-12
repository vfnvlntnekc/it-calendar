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
  fetchProjectInfo,
  fetchProjects,
  updateProject,
} from "../requests/problemAPI";
import { useNavigate, useParams } from "react-router-dom";

const EditProjectForm = () => {
  const { id } = useParams();
  const { problem } = useContext(Context);
  const paperStyle = { width: 500, background: "#F8F8F8" };
  const marginStyle = { margin: "10px 0" };
  const gridStyle = { height: "100vh", width: "vmax", background: "#F8F8F8" };
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [begin, setBegin] = useState("");
  const [end, setEnd] = useState("");
  const [nameChange, setNameChange] = useState("");
  const [descriptionChange, setDescriptionChange] = useState("");
  const [beginChange, setBeginChange] = useState("");
  const [endChange, setEndChange] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjectInfo(id).then((data) => {
      problem.setSelectedProjectInfo(data);
      setName(problem.selectedProjectInfo.data.name);
      setDescription(problem.selectedProjectInfo.data.project_description);
      setBegin(problem.selectedProjectInfo.data.date_begin_project);
      setEnd(problem.selectedProjectInfo.data.date_complete_project);

      console.log(name);
      console.log(id);
    });
  }, []);

  const editProject = () => {
    updateProject(id, {
      name: nameChange,
      project_description: descriptionChange,
      date_begin_project: beginChange,
      date_complete_project: endChange,
    }).then((data) => console.log(data));
    //console.log(id);
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
        alignItems="top"
      >
        <Paper align="center" elevation={0} style={paperStyle}>
          <Grid>
            <h2>Изменение проекта</h2>
            Пожалуйста, введите данные.
            <TextField
              label="Проект"
              placeholder={name}
              variant="outlined"
              style={marginStyle}
              value={nameChange}
              onChange={(e) => setNameChange(e.target.value)}
              fullWidth
            ></TextField>
            <TextField
              label="Описание"
              multiline
              placeholder={description}
              rows={4}
              variant="outlined"
              style={marginStyle}
              value={descriptionChange}
              onChange={(e) => setDescriptionChange(e.target.value)}
              fullWidth
            />
            <TextField
              label="Время начала"
              type="datetime-local"
              defaultValue=""
              InputLabelProps={{
                shrink: true,
              }}
              style={marginStyle}
              value={beginChange}
              onChange={(e) => setBeginChange(e.target.value)}
              fullWidth
            />
            <TextField
              label="Время окончания"
              type="datetime-local"
              defaultValue={end}
              InputLabelProps={{
                shrink: true,
              }}
              style={marginStyle}
              value={endChange}
              onChange={(e) => setEndChange(e.target.value)}
              fullWidth
            />
            <Button
              type="submit"
              style={marginStyle}
              variant="contained"
              color="primary"
              onClick={editProject}
              fullWidth
            >
              Изменить проект
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default EditProjectForm;
