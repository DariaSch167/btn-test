import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    document.button = count;
  });

  // Практическое задание №1 - неделя 28 Формы
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value.toUpperCase());
  };
  const handleCheck = (e) => {
    e.preventDefault();
    document.getElementById("testText").textContent = inputValue;
    document.getElementById("testText").style.color = "#0000ff";
    setInputValue("");
  };

  return (
    <React.Fragment>
      <button onClick={handleClick}>{count}</button>;
      {/* Практическое задание №1 - неделя 28 Формы */}
      <div className="test_input">
        <input
          id="testInput"
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" onClick={handleCheck} />
        <p id="testText"></p>
      </div>
    </React.Fragment>
  );
}

export default Counter;
