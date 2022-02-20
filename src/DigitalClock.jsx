import React, { useState } from "react";
import ClockCss from "./DigitalClockCSS.css";

const DigitalClock = () => {

let time = new Date().toLocaleTimeString() ;

const [CTime , setCTime] = useState(time) ;

const updateTime = () => {

    time = new Date().toLocaleTimeString() ;
    
    setCTime(time)
}

setInterval(updateTime , 1000)

  return (
    <>
      <div className="main">
        <div className="box">
          <h1>{CTime}</h1>
        </div>
      </div>
    </>
  );
};

export default DigitalClock;
