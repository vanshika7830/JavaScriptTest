import { useState, useRef, useEffect } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  const [focusCount, setFocusCount] = useState(0);
  const inputRef = useRef(null);
  const historyRef = useRef([]);
  const handleFocus = () => {
    setFocusCount((prev) => prev + 1);
  };
  const handleSubmit = () => {
    const value = inputRef.current.value.trim();
    if (!value) return;
    setMessages((prev) => [...prev, value]);
    historyRef.current.push(value);
    inputRef.current.value = "";
  };
  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    console.log("Messages updated:", messages);
  }, [messages]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Focus Tracker & Message History</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Type message..."
        onFocus={handleFocus}
      />

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={focusInput}>Focus Input</button>

      <p>Focus count: {focusCount}</p>

      <h3>Messages:</h3>
      {messages.map((msg, index) => (
        <p key={index}>- {msg}</p>
      ))}

      <p>
        <strong>History in Ref (no re-render):</strong>{" "}
        {historyRef.current.join(", ")}
      </p>
    </div>
  );
}

export default App;
