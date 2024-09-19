import { useState } from "react";
import "../settings.css";

export default function DialogFont({ setSelectedFont }) {
  const [selectedFont, selectFont] = useState("kumbhSans");

  const handleFontClick = (font) => {
    selectFont(font);
    setSelectedFont(font);
  };

  return (
    <div className="fontContainer">
      <h3>FONT</h3>
      <div className="fontContent">
        <button
          className={`kumbhSans ${
            selectedFont === "kumbhSans" ? "active" : ""
          }`}
          onClick={() => handleFontClick("kumbhSans")}
        >
          Aa
        </button>
        <button
          className={`roboto ${selectedFont === "roboto" ? "active" : ""}`}
          onClick={() => handleFontClick("roboto")}
        >
          Aa
        </button>
        <button
          className={`spaceMono ${
            selectedFont === "spaceMono" ? "active" : ""
          }`}
          onClick={() => handleFontClick("spaceMono")}
        >
          Aa
        </button>
      </div>
    </div>
  );
}
