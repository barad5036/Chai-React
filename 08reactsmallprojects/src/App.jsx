import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  // Toggle between black and white
  const toggleColor = () => {
    setColor(color === "white" ? "black" : "white");
  };

  return (
    <div
      style={{
        backgroundColor: color,
        minHeight: "100vh", // makes it cover the whole viewport height
        margin: 0,
        padding: "20px",
        color: color === "white" ? "black" : "white" // text visible on both
      }}
    >
      <h2>Welcome, to React Small Projects..</h2>
      <button onClick={toggleColor}>Toggle Page Color</button>
    </div>
  );
}

export default App;
