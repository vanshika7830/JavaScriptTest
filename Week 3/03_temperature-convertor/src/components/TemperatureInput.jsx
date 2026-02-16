const TemperatureInput = ({
  label,
  value,
  onChange
}) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label>{label}: </label>
      <input
        type="number"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TemperatureInput;
