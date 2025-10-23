import { useState } from "react";
import CardProps from "../CardProps/CardProps";
import "../CardProps/CardProps.css";

const Heropage = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const [text, setText] = useState("Hello ✨👋");

  const changeText = () => {
    setText("Welcome to React 🚀");
  };

  const [on, setOn] = useState(false);

  const toggle = () => {
    setOn(!on);
  };

  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>This is {text}</h1>
      <button onClick={changeText}>Change Text</button>

      <button onClick={handleIncrement}>Count</button>

      <p>Count is: {counter}</p>

      <div>
        <h2>The light is {on ? "On" : "Off"}</h2>
        <button onClick={toggle}>{on ? "Turn Off" : "Turn On"}</button>
      </div>

      <input
        type="text"
        placeholder="Enter your Name"
        value={name}
        onChange={handleChange}
      />

      <p>Hello {name} welcome to my react application</p>

      <div className="card-props-container">
        <CardProps
          h3="First Card"
          p="woh4ufwhuiw"
          cardImages="../../../public/image.jpg"
          bgColor={"#f9c74f"}
        />

        <CardProps
          h3="Second Card"
          p="woh4ufwhuiw"
          cardImages="https://images.pexels.com/photos/34288156/pexels-photo-34288156.jpeg"
          bgColor={"#90be6d"}
        />
        <CardProps
          h3="Third Card"
          p="woh4ufwhuiw"
          cardImages="https://images.pexels.com/photos/31618288/pexels-photo-31618288.jpeg"
          bgColor={"#f3722c"}
        />

        <CardProps
          h3="Fifth card"
          p="ui7gyg"
          cardImages="https://images.pexels.com/photos/31618288/pexels-photo-31618288.jpeg"
          bgColor={"#577590"}
        />
      </div>
    </div>
  );
};

export default Heropage;
