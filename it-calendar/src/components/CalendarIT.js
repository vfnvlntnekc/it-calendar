import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
  
const localizer = momentLocalizer(moment)


const events = [
    {
        title: "Event 1",
        allday: true,
        start: new Date(2023, 6, 1, 17, 0),
        end: new Date(2023, 6, 1, 17, 30),
    },
    {
        title: "Event 2",
        start: new Date(2023, 6, 1),
        end: new Date(2023, 6, 3),
    }
];

const CalendarIT = () => {
    return (
        <Calendar localizer={localizer} events={events} 
        startAccessor="start" endAccessor="end"
        style={{height:500, margin:"50px"}} />
    );
};

export default CalendarIT;