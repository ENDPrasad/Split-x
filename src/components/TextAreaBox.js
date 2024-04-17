const TextAreaBox = ({ onChangeHandler, idx, defaultVal }) => {
  return (
    <textarea
      style={{ width: "100%", height: "20rem" }}
      placeholder="Enter/Copy paste content..."
      onChange={(e) => onChangeHandler(idx, e.target.value)}
      value={defaultVal}
    >
      {/* {defaultVal} */}
    </textarea>
  );
};

export default TextAreaBox;
