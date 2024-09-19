import { useState } from "react";
import DialogColor from "./DialogColor";
import DialogFont from "./DialogFont";
import DialogTime from "./DialogTime";
import "./settings.css";

export default function Settings({ dialogRef, applySettings }) {
  const [selectedFont, setSelectedFont] = useState("kumbhSans");
  const [selectedColor, setSelectedColor] = useState("orange");

  const closeModal = () => {
    dialogRef.current.close();
  };

  const applyChanges = () => {
    applySettings(selectedFont, selectedColor);
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
        <DialogTime />
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
