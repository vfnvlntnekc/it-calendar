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
import { useParams } from "react-router-dom";
import { fetchStepInfo } from "../requests/problemAPI";

const EditStep = () => {
  const id = useParams();
  const { problem } = useContext(Context);
  const paperStyle = { width: 500, background: "#F8F8F8" };
  const marginStyle = { margin: "10px 0" };
  const gridStyle = { height: "100vh", width: "vmax", background: "#F8F8F8" };

  const [projectName, setProjectName] = useState([]);
  const [project, setProject] = useState("");
  const [step, setStep] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [begin, setBegin] = useState("");
  const [end, setEnd] = useState("");
  console.log(id.step);

  useEffect(() => {
    fetchStepInfo(id.id, id.step).then((data) => {
      problem.setSelectedTaskInfo(data);
      setName(problem.setSelectedTaskInfo.data.name);
      setDescription(problem.setSelectedTaskInfo.data.step_description);
      setBegin(problem.setSelectedTaskInfo.data.date_begin_task);
      setEnd(problem.setSelectedTaskInfo.data.date_complete_task);

      console.log(name);
      console.log(id);
    });
  }, []);
  const editTask = () => {
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
            <h2>Изменение этапа</h2>
            Пожалуйста, введите данные.
            <div></div>
            <TextField
              label="Название этапа"
              placeholder="Введите название этапа"
              variant="outlined"
              style={marginStyle}
              fullWidth
            ></TextField>
            <TextField
              label="Описание"
              multiline
              placeholder="Введите описание этапа"
              rows={4}
              variant="outlined"
              style={marginStyle}
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
              fullWidth
            />
            <Button
              type="submit"
              style={marginStyle}
              variant="contained"
              color="primary"
              fullWidth
            >
              Изменить этап
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default EditStep;
