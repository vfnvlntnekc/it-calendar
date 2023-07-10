import React, { useContext, useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { fetchTasks } from "../requests/problemAPI";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Event 1",
    allday: true,
    start: new Date(2023, 6, 1, 13, 0),
    end: new Date(2023, 6, 1, 17, 30),
  },
  {
    title: "Event 2",
    start: new Date(2023, 6, 1),
    end: new Date(2023, 6, 4),
  },
  {
    title: "Event 3",
    allday: true,
    start: new Date(2023, 6, 1, 14, 0),
    end: new Date(2023, 6, 1, 17, 30),
  },
];

const CalendarIT = observer(() => {
  const { problem } = useContext(Context);

  //console.log(problem);
  useEffect(() => {
    fetchTasks(problem.selectedProject, problem.selectedStep).then((data) => {
      problem.setTasks(data);
      console.log(data);
    });
  }, [problem.selectedProject, problem.selectedStep]);

  return (
    <Calendar
      localizer={localizer}
      events={problem.tasks}
      titleAccessor="task_name"
      startAccessor="date_begin_task"
      endAccessor="date_complete_task"
      style={{ height: 500, margin: "20px 50px" }}
    />
  );
});

export default CalendarIT;
