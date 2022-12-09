import { useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator";

function App(){
  const [distance, setDistance] = useState();
  const [time, setTime] = useState();
  const [speed, setSpeed] = useState();

  function handleDistance(e){
    setDistance(e.target.value);
  }
  function handleTime(e){
    setTime(e.target.value);
  }
  function calculateSpeed(){
    setSpeed(distance / time);
  }
  function clearSpeed(){
    setSpeed();
  }

  return (
    <div className="App">
      <h1>Speed Calculator</h1>
      <Calculator
      handleDistance={handleDistance}
      handleTime={handleTime}
      calculateSpeed={calculateSpeed}
      clearSpeed={clearSpeed}
      distance={distance}
      time={time}
      speed={speed} />
    </div>
  );
}
export default App;