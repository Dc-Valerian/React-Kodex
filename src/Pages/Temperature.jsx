import { useState } from "react";

function TemperatureInput({ temperature, onTemperatureChange }) {
  return (
    <input
      type="number"
      value={temperature}
      onChange={(e) => onTemperatureChange(e.target.value)}
      placeholder="Enter Celsius"
    />
  );
}

function TemperatureDisplay({ temperature }) {
    const fahrenheit = (temperature * 9) / 5 + 32;
  return <p>🌡️ {fahrenheit}</p>;
}

export default function Temperature() {
  const [temp, setTemp] = useState(0);

  return (
    <div>
      <h2>Temperature Converter</h2>
      <TemperatureInput temperature={temp} onTemperatureChange={setTemp} />
      <TemperatureDisplay temperature={temp} />
    </div>
  );
}





