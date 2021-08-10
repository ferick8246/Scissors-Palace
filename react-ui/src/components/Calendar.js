import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "../calendar.css";

function ReactCalendar() {
  const [date, setDate] = useState(new Date());
  const [dateString, setDateString] = useState();
  const [path, setPath] = useState(window.location.pathname);
  const [service, setService] = useState({});

  useEffect(() => {
    switch (path) {
      case "/calendar/womensshampoo":
        setService({ name: "Women's Shampoo", time: "30 min", cost: "$65" });
        break;
      case "/calendar/womenshaircut":
        setService({ name: "Women's Haircut", time: "30 min", cost: "$65" });
      case "/calendar/partialhighlight":
        setService("Partial Highlight");
      case "/calendar/fullhighlight":
        setService("Full Highlight");
      case "/calendar/bridalstyle":
        setService("Bridal Style");
      case "/calendar/fullbridalservice":
        setService("Full Bridal Service");
      case "/calendar/afrohairstyling":
        setService("Afro Hair Styling");
      case "/calendar/locstyling":
        setService("Loc Styling");
      case "/calendar/mensshampoo":
        setService("Mens Shampoo");
      case "/calendar/mensfade":
        setService("Mens Fade");
      case "/calendar/braidingservices":
        setService("Braiding Services");
      case "/calendar/champagne":
        setService("Champagne");
    }
  }, [path]);

  useEffect(() => {
    setDateString(date.toString().slice(0, 10));
  }, [date]);

  const onChange = (date) => {
    setDate(date);
  };

  return (
    //this is the header
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Schedule Service Online
        </h1>
      </div>
      {/* this is the body container */}
      <div class="bodyContainer2">
        {/* this is the calendar */}
        <Calendar formatYear onChange={onChange} value={date} />
        {/* this is the smaller, second div */}
        <div class="checkoutContainer">
          <h1 id="serviceName">{service.name}</h1>
          <br></br>
          <br></br>
          <h2>
            {dateString} | {service.cost}
          </h2>
          <a
            href="/cart"
            id="checkoutArrow"
            class="mt-3 text-yellow-500 inline-flex items-center"
          >
            Checkout
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ReactCalendar;

{
  /* <h2 class="tracking-widest text-lg title-font font-medium text-black-500 mb-1">
                  {path}
                </h2> */
}

{
  /* <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                  date goes here
                </h1> */
}

{
  /* <a href="/cart" class="mt-3 text-yellow-500 inline-flex items-center">Checkout
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a> */
}
