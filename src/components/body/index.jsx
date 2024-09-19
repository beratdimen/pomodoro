import "./body.css";

export default function Body({ color }) {
  const boxShadowStyle = {
    orange: "0px 4px 10px rgba(255, 165, 0, 0.5)",
    lightBlue: "0px 4px 10px rgba(173, 216, 230, 0.5)",
    purple: "0px 4px 10px rgba(128, 0, 128, 0.5)",
  };

  return (
    <div className="bodyContainer ">
      <div className="div">
        <div className={` bodyStick ${color}`}>
          <div className="bodyTime">
            <h2>17:59</h2>
            <p>PAUSE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
