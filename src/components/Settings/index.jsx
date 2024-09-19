import DialogColor from "./DialogColor";
import DialogFont from "./DialogFont";
import DialogTime from "./DialogTime";
import "./settings.css";

export default function Settings({ dialogRef }) {
  const closeModal = () => {
    dialogRef.current.close();
  };

  return (
    <div className="dialogContainer">
      <dialog ref={(e) => (dialogRef.current = e)}>
        <div className="dialogHeader">
          <h3>Settings</h3>
          <button onClick={closeModal}>
            <img src="./img/close.png" alt="" />
          </button>
        </div>
        <DialogTime />
        <DialogFont />
        <DialogColor />
        <button className="applyBtn">Apply</button>
      </dialog>
      <div className="dialogOverlay"></div>
    </div>
  );
}
