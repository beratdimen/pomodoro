import { useState } from "react";
import Body from "./components/body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToggleButton from "./components/ToogleButton";
import "./App.css";

function App() {
  const [font, setFont] = useState("kumbhSans");
  const [color, setColor] = useState("orange");

  const applySettings = (selectedFont, selectedColor) => {
    setFont(selectedFont);
    setColor(selectedColor);
  };

  console.log(font);

  return (
    <div className={`container ${font} `}>
      <Header />
      <ToggleButton color={color} />
      <Body color={color} />
      <Footer applySettings={applySettings} />
    </div>
  );
}

export default App;
