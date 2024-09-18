import "../settings.css";

export default function DialogTime() {
  return (
    <div className="inputContainer">
      <h3>TIME (MINUTES)</h3>
      <div className="inputBox">
        <div className="input">
          <label>pomodoro</label>
          <input type="number" />
        </div>
        <div className="input">
          <label>short break</label>
          <input type="number" />
        </div>
        <div className="input">
          <label>long break</label>
          <input type="number" />
        </div>
      </div>
    </div>
  );
}
