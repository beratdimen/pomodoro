import "./App.css";
import Body from "./components/body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToggleButton from "./components/ToogleButton";

function App() {
  return (
    <div className="container">
      <Header />
      <ToggleButton />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
