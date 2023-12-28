import "./App.css";
import Slide1 from "./components/Slide1";
import Slide2 from "./components/Slide2";

function App() {
  return (
    <div className="flex flex-col space-y-5">
      <Slide1 />
      <Slide2 />
    </div>
  );
}

export default App;
