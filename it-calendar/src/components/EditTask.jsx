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
import React, { useContext, useState } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";

const EditTask = observer(() => {
  const { problem } = useContext(Context);
  const paperStyle = { width: 500, background: "#F8F8F8" };
  const marginStyle = { margin: "10px 0" };
  const gridStyle = { height: "100vh", width: "vmax", background: "#F8F8F8" };
  const [projectName, setProjectName] = useState([]);
  const [project, setProject] = useState("");
  const [step, setStep] = useState("");

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  // const names = [
  //   "Oliver Hansen",
  //   "Van Henry",
  //   "April Tucker",
  //   "Ralph Hubbard",
  //   "Omar Alexander",
  //   "Carlos Abbott",
  //   "Miriam Wagner",
  //   "Bradley Wilkerson",
  //   "Virginia Andrews",
  //   "Kelly Snyder",
  // ];
  const handleChange = (event) => {
    setProject(event.target.value);
    problem.setSelectedProject(event.target.value);
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
            <h2>Изменение задачи</h2>
            Пожалуйста, введите данные.
            <div></div>
            <FormControl fullWidth>
              <InputLabel>Проект</InputLabel>
              <Select value={project} onChange={handleChange}>
                {problem.projects.data?.map((project) => (
                  <MenuItem key={project.project_id} value={project.project_id}>
                    {project.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* <FormControl fullWidth>
              <InputLabel>Этап</InputLabel>
              <Select value={step} onChange={(e) => setStep(e.target.value)}>
                {problem.step.data?.map((step) => (
                  <MenuItem key={step.step_id} value={step.step_id}>
                    {step.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}
            <TextField
              label="Название задачи"
              placeholder="Введите название задачи"
              variant="outlined"
              style={marginStyle}
              fullWidth
            ></TextField>
            <TextField
              label="Описание"
              multiline
              placeholder="Введите описание задачи"
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
              Изменить задачу
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
});

export default EditTask;
