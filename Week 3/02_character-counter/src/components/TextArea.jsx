const TextArea = ({ text, handleChange }) => {
  return (
    <textarea
      rows="5"
      cols="40"
      value={text}
      onChange={handleChange}
      placeholder="Type your message..."
    />
  );
};

export default TextArea;
