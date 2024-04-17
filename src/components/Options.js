const Options = ({ onClickHandler, onChangeHandler }) => {
  return (
    <div className="options">
      <select onChange={(e) => onChangeHandler("dropdown", e.target.value)}>
        <option value={","}>,</option>
        <option value={"|"}>|</option>
        <option value={";"}>;</option>
        <option value={" "}>Space</option>
        {/* <option value={"\\n"}>New Line</option> */}
      </select>
      <div id="right-arrow" onClick={() => onClickHandler("right")}>
        <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
          <title />
          <path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z" />
        </svg>
      </div>
      <div id="left-arrow" onClick={() => onClickHandler("left")}>
        <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
          <title />
          <path d="M39.3756,48.0022l30.47-25.39a6.0035,6.0035,0,0,0-7.6878-9.223L26.1563,43.3906a6.0092,6.0092,0,0,0,0,9.2231L62.1578,82.615a6.0035,6.0035,0,0,0,7.6878-9.2231Z" />
        </svg>
      </div>
    </div>
  );
};

export default Options;
