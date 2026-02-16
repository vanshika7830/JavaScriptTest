import { useState, useEffect } from "react";

const useTemperature = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [activeField, setActiveField] = useState(null);

  useEffect(() => {
    if (activeField === "celsius") {
      const c = parseFloat(celsius);
      if (!isNaN(c)) {
        setFahrenheit(((c * 9) / 5 + 32).toFixed(2));
      } else {
        setFahrenheit("");
      }
    }

    if (activeField === "fahrenheit") {
      const f = parseFloat(fahrenheit);
      if (!isNaN(f)) {
        setCelsius(((f - 32) * 5 / 9).toFixed(2));
      } else {
        setCelsius("");
      }
    }
  }, [celsius, fahrenheit, activeField]);

  const handleCelsiusChange = (e) => {
    setActiveField("celsius");
    setCelsius(e.target.value);
  };

  const handleFahrenheitChange = (e) => {
    setActiveField("fahrenheit");
    setFahrenheit(e.target.value);
  };

  return {
    celsius,
    fahrenheit,
    handleCelsiusChange,
    handleFahrenheitChange,
  };
};

export default useTemperature;
