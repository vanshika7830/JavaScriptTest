import TextArea from "./components/TextArea";
import useCharacterCounter from "./hooks/useCharacterCounter";

function App() {
  const {
    text,
    remaining,
    handleChange,
    totalCharacters,
    limit,
  } = useCharacterCounter();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Live Character Counter</h1>

      <TextArea text={text} handleChange={handleChange} />

      <p>Characters: {totalCharacters}</p>
      <p>Remaining: {remaining}</p>

      {remaining <= 10 && remaining > 0 && (
        <p style={{ color: "red" }}>
          ⚠ Only {remaining} characters left!
        </p>
      )}

      {remaining === 0 && (
        <p style={{ color: "red" }}>
          ⚠ Character limit reached!
        </p>
      )}
    </div>
  );
}

export default App;
