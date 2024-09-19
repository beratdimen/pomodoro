import { useState } from "react";

export default function DialogColor({ setSelectedColor }) {
  const [selectedColor, selectColor] = useState("orange");
  const handleColorClick = (color) => {
    selectColor(color); 
    setSelectedColor(color); 
  };

  return (
    <div className="colorContainer">
      <h3>Color</h3>
      <div className="colorContent">
        <button
          className={`orange ${selectedColor === "orange" ? "active" : ""}`}
          onClick={() => handleColorClick("orange")}
        ></button>
        <button
          className={`lightBlue ${
            selectedColor === "lightBlue" ? "active" : ""
          }`}
          onClick={() => handleColorClick("lightBlue")}
        >
          {" "}
        </button>
        <button
          className={`purple ${selectedColor === "purple" ? "active" : ""}`}
          onClick={() => handleColorClick("purple")}
        ></button>
      </div>
    </div>
  );
}
