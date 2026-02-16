import TemperatureInput from "./components/TemperatureInput";
import useTemperature from "./hooks/useTemperature";

function App() {
  const {
    celsius,
    fahrenheit,
    handleCelsiusChange,
    handleFahrenheitChange,
  } = useTemperature();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Temperature Converter</h1>

      <TemperatureInput
        label="Celsius"
        value={celsius}
        onChange={handleCelsiusChange}
      />

      <TemperatureInput
        label="Fahrenheit"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
      />
    </div>
  );
}

export default App;
