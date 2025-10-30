import { useEffect, useState } from "react";
import CardProps from "../CardProps/CardProps";
import "../CardProps/CardProps.css";

const Heropage = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const [text, setText] = useState("Hello ✨👋");

  const changeText = () => {
    setText("Welcome to ygcytcccfxgx 🚀");
  };

  const [on, setOn] = useState(false);

  const toggle = () => {
    setOn(!on);
  };

  const [name, setName] = useState("");

  const handleChange = (debby) => {
    setName(debby.target.value);
  };

  // const [color, setColor] = useState("red");

  // const changeColor = () => {
  //   const randomColors = `#${Math.floor(Math.random() * 16777215).toString(
  //     16
  //   )}`;

  //   setColor(randomColors);
  // };

  const [color, setColor] = useState("pink");

  const changeColor = () => {
    const randomColors =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColors);
  };

  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  // useEffect(() => {
  //   alert("Welcome to my React Website");
  // });

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // useEffect(() => {
  //   console.log("Hello, I just appeared");

  //   return () => {
  //     console.log("Bye bye, i am gone");
  //   };
  // }, []);

  // useEffect(() => {
  //   alert("👋 Welcome to my page!");

  //   return () => {
  //     alert("Goodbye 👋 (page removed)");
  //   };
  // }, []);

  const [message, setMessage] = useState("Waiting.....");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("Time Up");
    }, 10000);
    return () => clearTimeout(timer);
  });

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);


  return (
    <div>
      <h1>{message}</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name},{user.email}
          </li>
        ))}
      </ul>

      <br />
      <br />
      <br />
      <br />
      <h2>Welcome to my React</h2>
      <h1>MADE AN UPDATE</h1>
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

      {/* <div>
        <div
          style={{ height: "400px;widhth:400px", backgroundColor: color }}
        ></div>
        <button onClick={changeColor}>Color Change</button>
      </div> */}

      <div
        onClick={changeColor}
        style={{
          backgroundColor: color,
          width: "200px",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          cursor: "pointer",
        }}
      >
        <h1>Random Color Changer</h1>
        Click Me to change Color
      </div>

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button
          onClick={toggleLike}
          style={{
            fontSize: "40px",
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          {isLiked ? "❤️" : "🤍"}
        </button>
        <p>{isLiked ? "You liked this!" : "Click to like!"}</p>
      </div>

      <div>
        <h2>Current Time</h2>
        <h3>{time}</h3>
      </div>
      <div className="card-props-container">
        <CardProps
          h3="First Card"
          p="woh4ufwhuiw"
          cardImages="../../../public/image.jpg"
          bgColor={"#f9c74f"}
          buttonText="f5exytfy"
        />

        <CardProps
          h3="Second Card"
          p="woh4ufwhuiw"
          cardImages="https://images.pexels.com/photos/34288156/pexels-photo-34288156.jpeg"
          bgColor={"#90be6d"}
          buttonText="gxze"
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
