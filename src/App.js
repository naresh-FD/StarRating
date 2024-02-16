import { useState } from "react";
import StarRating from "./StarRating";
import Keyboard from "./Keyboard";
import "./styles.css";

export default function App() {
  const [selectedstar, setselectedstar] = useState(0);

  // const [input, setInput] = useState("");

  // const handleKeyPress = (key) => {
  //   setInput(input + key);
  // };

  const handleclick = (star) => {
    setselectedstar(star);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {/* <input type="text" value={input} readOnly />
      <Keyboard onKeyPress={handleKeyPress} /> */}
      <StarRating totalStars={5} onChange={handleclick} />
    </div>
  );
}
