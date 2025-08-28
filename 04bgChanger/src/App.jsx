import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("orange")

  return (
    <div 
      className="w-full h-screen flex flex-col items-center justify-center transition-all duration-500"
      style={{ backgroundColor: color }}
    >
      <h2 className="font-mono text-2xl font-bold text-white mb-6 drop-shadow-lg">
        Hello, Welcome to Color Changer Project
      </h2>

      <div className="w-[1200px] h-auto bg-white rounded-2xl shadow-lg p-4 flex flex-wrap gap-3 justify-center">
        <button onClick={() => setColor("red")} className="px-4 py-2 bg-red-700 text-white rounded-xl shadow-md hover:bg-red-800 transition">Red</button>
        <button onClick={() => setColor("green")} className="px-4 py-2 bg-green-700 text-white rounded-xl shadow-md hover:bg-green-800 transition">Green</button>
        <button onClick={() => setColor("blue")} className="px-4 py-2 bg-blue-700 text-white rounded-xl shadow-md hover:bg-blue-800 transition">Blue</button>
        <button onClick={() => setColor("violet")} className="px-4 py-2 bg-violet-600 text-white rounded-xl shadow-md hover:bg-violet-700 transition">Violet</button>
        <button onClick={() => setColor("gray")} className="px-4 py-2 bg-gray-700 text-white rounded-xl shadow-md hover:bg-gray-800 transition">Gray</button>
        <button onClick={() => setColor("black")} className="px-4 py-2 bg-slate-900 text-white rounded-xl shadow-md hover:bg-black transition">Black</button>
        <button onClick={() => setColor("yellow")} className="px-4 py-2 bg-yellow-700 text-white rounded-xl shadow-md hover:bg-yellow-800 transition">Yellow</button>
        <button onClick={() => setColor("pink")} className="px-4 py-2 bg-pink-700 text-white rounded-xl shadow-md hover:bg-pink-800 transition">Pink</button>
        <button onClick={() => setColor("purple")} className="px-4 py-2 bg-purple-700 text-white rounded-xl shadow-md hover:bg-purple-800 transition">Purple</button>
        <button onClick={() => setColor("orange")} className="px-4 py-2 bg-orange-400 text-white rounded-xl shadow-md hover:bg-orange-500 transition">Orange</button>
        <button onClick={() => setColor("white")} className="px-4 py-2 bg-white text-black rounded-xl shadow-md hover:bg-gray-200 transition">White</button>
      </div>
    </div>
  )
}

export default App
