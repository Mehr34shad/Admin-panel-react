import React, { useEffect, useState } from "react";
import { Col } from "reactstrap";
import "./AnalogClock.css";

function AnalogClock() {
  // const deg = 6;
  // const hr = document.querySelector("#hr");
  // const mn = document.querySelector("#mn");
  // const sc = document.querySelector("#sc");
  // const timeInMs = this.getTimeSinceMidnightInMs();
  // const hh = (timeInMs / (1000 * 60 * 60));
  // const mm = hh * 60;
  // const ss = mm * 60;

  // setInterval(() => {
  //   let day = new Date();
  //   let hh = day.getHours() * 30;
  //   let mm = day.getMinutes() * deg;
  //   let ss = day.getSeconds() * deg;

  //   hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  //   mn.style.transform = `rotateZ(${mm}deg)`;
  //   sc.style.transform = `rotateZ(${ss}deg)`;
  // });
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    // let ampm = "";
    let hh = time.getHours() * 30;
    const mm = time
      .getMinutes() * 6
      .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
    const ss = time.getSeconds() * 6;

    // function hour12(params) {
    //   let hour = time.getHours;
    //   if (hour < 12) {
    //     ampm = "pm";
    //   }
    //   if (hour >= 12) {
    //     hour = hour - 12;
    //     ampm = "pm";
    //   }
    //   if (hour === 0) {
    //     hour = 12;
    //   }
    //   return hour;
    // }

    const hr = document.getElementById("hr");
    const mn = document.getElementById("mn");
    const sc = document.getElementById("sc");

    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <>
      <Col xl="4">
        <div className="clock">
          <div className="hour">
            <div className="hr" id="hr"></div>
          </div>

          <div className="min">
            <div className="mn" id="mn"></div>
          </div>

          <div className="sec">
            <div className="sc" id="sc"></div>
          </div>
        </div>
      </Col>
    </>
  );
}

export default AnalogClock;
