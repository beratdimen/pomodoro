import { useState, useEffect } from "react";
import "./body.css";

export default function Body({ color, time }) {
  const [minutes, setMinutes] = useState(time);
  const [seconds, setSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setMinutes(time);  
    setSeconds(0);
  }, [time]);

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval); 
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [minutes, seconds, isPaused]);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="bodyContainer">
      <div className="div">
        <div className={`bodyStick ${color}`}>
          <div className="bodyTime">
            <h2>{`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</h2>
            <p onClick={togglePause}>{isPaused ? "RESUME" : "PAUSE"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
