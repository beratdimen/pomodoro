import { useState } from "react";
import DialogColor from "./DialogColor";
import DialogFont from "./DialogFont";
import DialogTime from "./DialogTime";
import "./settings.css";

export default function Settings({
  dialogRef,
  applySettings,
  setPomodoroTimes,
}) {
  const [selectedFont, setSelectedFont] = useState("kumbhSans");
  const [selectedColor, setSelectedColor] = useState("orange");
  const [pomodoroTime, setPomodoroTime] = useState(25);
  const [shortBreakTime, setShortBreakTime] = useState(5);
  const [longBreakTime, setLongBreakTime] = useState(15);

  const closeModal = () => {
    dialogRef.current.close();
  };

  const applyChanges = () => {
    applySettings(selectedFont, selectedColor);

    setPomodoroTimes({
      pomodoro: pomodoroTime,
      shortBreak: shortBreakTime,
      longBreak: longBreakTime,
    });

    closeModal();
  };

  return (
    <div className="dialogContainer">
      <dialog ref={(e) => (dialogRef.current = e)}>
        <div className="dialogHeader">
          <h3>Settings</h3>
          <button onClick={closeModal}>
            <img src="./img/close.png" alt="Close" />
          </button>
        </div>
        <DialogTime
          setPomodoroTime={setPomodoroTime}
          setShortBreakTime={setShortBreakTime}
          setLongBreakTime={setLongBreakTime}
        />
        <DialogFont setSelectedFont={setSelectedFont} />
        <DialogColor setSelectedColor={setSelectedColor} />
        <button className="applyBtn" onClick={applyChanges}>
          Apply
        </button>
      </dialog>
      <div className="dialogOverlay"></div>
    </div>
  );
}
