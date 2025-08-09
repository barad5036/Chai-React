// src/App.jsx
import { useState } from "react";
import Chai from "./chai"
import Learning_react from "./learning"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <h1>Hello, Welcome to the Vite-Project</h1>
    <Learning_react/>
    <Chai/>
    <h3>Chai and react code imported in the app.jsx and the app.jsx is rendered in the main.jsx in the vite</h3>
    </>
  );
}

export default App;
