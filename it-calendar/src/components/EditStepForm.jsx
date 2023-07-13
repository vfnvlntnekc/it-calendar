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
import { useNavigate, useParams } from "react-router-dom";
import { fetchStepInfo, updateStep } from "../requests/problemAPI";

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
  console.log(id.step, id.id);
  const [nameChange, setNameChange] = useState("");
  const [descriptionChange, setDescriptionChange] = useState("");
  const [beginChange, setBeginChange] = useState("");
  const [endChange, setEndChange] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchStepInfo(id.id, id.step).then((data) => {
      console.log(data);
      problem.setSelectedStepInfo(data);
      setName(problem.selectedStepInfo.data.name);
      setDescription(problem.selectedStepInfo.data.step_description);
      setBegin(problem.selectedStepInfo.data.date_begin_task);
      setEnd(problem.selectedStepInfo.data.date_complete_task);

      console.log(name);
      console.log(id);
    });
  }, []);

  const editStep = () => {
    updateStep(id.id, id.step, {
      name: nameChange ? nameChange : name,
      step_description: descriptionChange ? descriptionChange : description,
      date_begin_step: beginChange ? beginChange : begin,
      date_complete_step: endChange ? endChange : end,
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
              value={nameChange}
              onChange={(e) => setNameChange(e.target.value)}
              fullWidth
            ></TextField>
            <TextField
              label="Описание"
              multiline
              placeholder="Введите описание этапа"
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
              defaultValue="2023-07-07T10:30"
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
              defaultValue="2023-07-07T11:30"
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
              onClick={editStep}
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
