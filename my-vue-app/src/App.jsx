
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";  ← this line removed
import App from "./App.jsx";
function App() {
  const [count, setCount] = useState(0)

  return (
    <h1>
      Hello,Welcome to the Vite-Project
    </h1>
  );
}

export default App
