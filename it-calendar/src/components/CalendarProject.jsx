import React, { useContext, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { fetchTasks, fetchTasksCalendar } from "../requests/problemAPI";
import { useNavigate } from "react-router-dom";

const localizer = momentLocalizer(moment);

const CalendarProject = observer(() => {
  const { problem } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={problem.projects}
        titleAccessor="project_name"
        startAccessor="date_begin_project"
        endAccessor="date_complete_project"
        style={{ height: 500, margin: "20px 50px" }}
      />
      if {problem.selectedStep} navigate("loh")
    </div>
  );
});

export default CalendarProject;
