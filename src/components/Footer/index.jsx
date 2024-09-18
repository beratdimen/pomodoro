import { useRef, useState } from "react";
import "./footer.css";
import Settings from "../Settings";

export default function Footer() {
  const dialogRef = useRef(false);

  const openModal = () => {
    dialogRef.current.showModal();
  };

  return (
    <div className="footer">
      <button onClick={openModal}>
        <img src="./img/settings.png" alt="" />
      </button>
      <Settings dialogRef={dialogRef} />
    </div>
  );
}
