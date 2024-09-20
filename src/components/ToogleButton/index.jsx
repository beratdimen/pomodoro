import React, { useState, useEffect } from "react";
import "./toogleButton.css";

export default function ToggleButton({ color, setCurrentMode, currentMode }) {
  const [active, setActive] = useState(currentMode || "Pomodoro");

  const handleToggle = (option) => {
    setActive(option);
    setCurrentMode(option);
  };

  const btnList = ["Pomodoro", "Short Break", "Long Break"];

  useEffect(() => {
    setCurrentMode(active); 
  }, [active, setCurrentMode]);

  return (
    <div className="toggleContainer">
      <div className="content">
        {btnList.map((x) => (
          <button
            key={x}
            className={`toggleButton ${active === x ? "active" : ""} ${color}`}
            onClick={() => handleToggle(x)}
          >
            {x}
          </button>
        ))}
      </div>
    </div>
  );
}
