import { useState, useEffect } from "react";

const LIMIT = 50;

const useCharacterCounter = () => {
  const [text, setText] = useState("");
  const [remaining, setRemaining] = useState(LIMIT);

  useEffect(() => {
    setRemaining(LIMIT - text.length);
  }, [text]);

  const handleChange = (e) => {
    const value = e.target.value;

    // Prevent typing beyond limit
    if (value.length <= LIMIT) {
      setText(value);
    }
  };

  return {
    text,
    remaining,
    handleChange,
    totalCharacters: text.length,
    limit: LIMIT,
  };
};

export default useCharacterCounter;
