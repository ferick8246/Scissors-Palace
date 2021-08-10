import React, { useState } from "react";
import Calendar from "react-calendar";
import '../calendar.css';



function ReactCalendar() {
  const [date, setDate] = useState(new Date());
  const [path, setPath] = useState(window.location.pathname)

  const onChange = (date) => {
    setDate(date);
  };
  return (
    <div>
      <h1>{path}</h1>
      <Calendar onChange={onChange} value={date} />
    </div>
  );
}

export default ReactCalendar;
