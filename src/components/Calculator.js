import "./Calculator.css";
function Calculator(props){
    const {
      handleDistance,
      handleTime,
      calculateSpeed,
      clearSpeed,
      distance,
      time,
      speed,
    } = props;
    return (
      <>
        <div className="input_div">
          <input
            type="number"
            placeholder="Distance"
            value={distance}
            onChange={handleDistance}
          />
          <input
            type="number"
            placeholder="Time"
            value={time}
            onChange={handleTime}
          />
        </div>
        <div className="button_div">
          <button onClick={calculateSpeed}>Calculate Speed</button>
          <button onClick={clearSpeed}>Clear Speed</button>
        </div>
        <div>
          <h1>
            {speed <= 60
              ? `Slow ${speed} km/hr.`
              : speed > 60 && speed < 100
              ? `Fast ${speed} km/hr.`
              : speed >= 100
              ? `Very Fast ${speed} km/hr.`
              : null}
          </h1>
        </div>
      </>
    );
}
export default Calculator;