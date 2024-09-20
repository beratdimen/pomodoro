import { useEffect, useState } from "react";
import "../settings.css";

export default function DialogTime() {
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);

  const handlePomodoroChange = (e) => setPomodoro(Number(e.target.value));
  const handleShortBreakChange = (e) => setShortBreak(Number(e.target.value));
  const handleLongBreakChange = (e) => setLongBreak(Number(e.target.value));

  useEffect(() => {
    setPomodoro(pomodoro);
    setShortBreak(shortBreak);
    setLongBreak(longBreak);
  }, [pomodoro, shortBreak, longBreak]);

  return (
    <div className="inputContainer">
      <h3>TIME (MINUTES)</h3>
      <div className="inputBox">
        <div className="input">
          <label>Pomodoro</label>
          <input
            type="number"
            value={pomodoro}
            onChange={handlePomodoroChange}
          />
        </div>
        <div className="input">
          <label>Short Break</label>
          <input
            type="number"
            value={shortBreak}
            onChange={handleShortBreakChange}
          />
        </div>
        <div className="input">
          <label>Long Break</label>
          <input
            type="number"
            value={longBreak}
            onChange={handleLongBreakChange}
          />
        </div>
      </div>
    </div>
  );
}
