import React, { useState } from "react";

const Keyboard = ({ onKeyPress }) => {
  const [keyboardLayout] = useState([
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["shift", "z", "x", "c", "v", "b", "n", "m", "backspace"],
    ["123", "space", "submit"],
  ]);

  const [shifted, setShifted] = useState(false);

  const handleKeyPress = (key) => {
    onKeyPress(key);
  };

  const handleShiftToggle = () => {
    setShifted(!shifted);
  };

  const renderKey = (key) => {
    switch (key) {
      case "shift":
        return (
          <div key={key} className="key" onClick={handleShiftToggle}>
            {shifted ? "SHIFT" : "shift"}
          </div>
        );
      case "123":
        return (
          <div key={key} className="key wide" onClick={() => {}}>
            123
          </div>
        );
      case "backspace":
        return (
          <div key={key} className="key wide" onClick={() => {}}>
            backspace
          </div>
        );
      case "space":
        return (
          <div key={key} className="key extra-wide" onClick={() => {}}>
            space
          </div>
        );
      case "submit":
        return (
          <div key={key} className="key wide submit" onClick={() => {}}>
            submit
          </div>
        );
      default:
        return (
          <div key={key} className="key" onClick={() => handleKeyPress(key)}>
            {shifted ? key.toUpperCase() : key}
          </div>
        );
    }
  };

  return (
    <div className="keyboard">
      {keyboardLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((key) => renderKey(key))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
