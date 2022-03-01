import moment from "moment";
import React from "react";
import Calendar from "react-calendar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

import { dataOutput } from "../UtilityFunctions/ScheduleCalculation";
// import events from "./CalendarEvents";

// import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
const _ = require("lodash");

const Schedule = () => {
  var calendarOP = dataOutput();
  console.log("calendarOP--Schedule", calendarOP);
  return (
    <div>
      {/* Schedule{dataOutput()} */}
      <br />{" "}
      <FullCalendar
        // defaultView="dayGridMonth"
        header={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        plugins={[dayGridPlugin, timeGridPlugin]}
        events={calendarOP}
      />
    </div>
  );
};

export default Schedule;
