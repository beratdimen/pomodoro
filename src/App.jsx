import { useState } from "react";
import Body from "./components/body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToggleButton from "./components/ToogleButton";
import "./App.css";

function App() {
  const [font, setFont] = useState("kumbhSans");
  const [color, setColor] = useState("orange");
  const [pomodoroTimes, setPomodoroTimes] = useState({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  });
  const [currentMode, setCurrentMode] = useState("Pomodoro");

  const applySettings = (selectedFont, selectedColor) => {
    setFont(selectedFont);
    setColor(selectedColor);
  };

  return (
    <div className={`container ${font}`}>
      <Header />
      <ToggleButton
        color={color}
        setCurrentMode={setCurrentMode}
        currentMode={currentMode}
      />
      <Body color={color} time={pomodoroTimes[currentMode.toLowerCase()]} />
      <Footer
        applySettings={applySettings}
        setPomodoroTimes={setPomodoroTimes}
      />
    </div>
  );
}

export default App;
