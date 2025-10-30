import React, { useEffect, useState } from "react";

const About = () => {
  const [colorr, setColorr] = useState("#87ceeb");

  useEffect(() => {
    // const colors = ["peru", "tomato", "limegreen", "gold", "skyblue", "purple"];

    const interval = setInterval(() => {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);

      setColorr(randomColor);
    }, 3000);

    return () => clearInterval(interval);
  });

  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleOnline() {
      setOnline(true);
    }
    function handleOffline() {
      setOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e) {
      setPos({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: colorr,
        display: "flex",
        justifyContent: "center",
        color: "white",
        transition: "background-color 0.5s ease",
      }}
    >
      <h1>Background:{colorr}</h1>

      <h2>🖱️ Move your mouse around!</h2>
      <p>
        X: {pos.x}, Y: {pos.y}
      </p>

      <h2>{online ? "✅ You are online!" : "⚠️ You are offline!"}</h2>
    </div>
  );
};

export default About;
