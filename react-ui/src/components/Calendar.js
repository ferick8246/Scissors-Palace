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

        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Schedule Service Online
          </h1>
        </div>

      
      <Calendar onChange={onChange} value={date} />

      <section>
      <div class="container px-5 py-24 mx-auto">
        

        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white hover:opacity-100">
                <h2 class="tracking-widest text-lg title-font font-medium text-yellow-500 mb-1">
                  {path}
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  date goes here
                </h1>
                <p class="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    </div>
  );
}

export default ReactCalendar;
