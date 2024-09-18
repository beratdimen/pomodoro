import React, { useState } from "react";
import "./toogleButton.css";

export default function ToggleButton() {
  const [active, setActive] = useState("Pomodoro");

  const handleToggle = (option) => {
    setActive(option);
  };

  const btnList = ["Pomodoro", "Short Break", "Long Break"];

  return (
    <div className="toggle-container">
      {btnList.map((x) => (
        <button
          key={x}
          className={`toggle-button ${active === x ? "active" : ""}`}
          onClick={() => handleToggle(x)}
        >
          {x}
        </button>
      ))}
    </div>
  );
}
