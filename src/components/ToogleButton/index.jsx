import React, { useState } from "react";
import "./toogleButton.css";

export default function ToggleButton() {
  const [active, setActive] = useState("Pomodoro");

  const handleToggle = (option) => {
    setActive(option);
  };

  const btnList = ["Pomodoro", "Short Break", "Long Break"];

  return (
    <div className="toggleContainer">
      <div className="content">
        {btnList.map((x) => (
          <button
            key={x}
            className={`toggleButton ${active === x ? "active" : ""}`}
            onClick={() => handleToggle(x)}
          >
            {x}
          </button>
        ))}
      </div>
    </div>
  );
}
