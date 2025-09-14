import { useState } from 'react'
import './App.css'
import Button from './Components/Button'

function App() {
  // 1) STATE
  const [text, setText] = useState('')      // current input box value
  const [todos, setTodos] = useState([])    // list of todo strings

  // 2) HANDLERS
  const handleChange = (e) => setText(e.target.value)

  const handleAdd = () => {
    const trimmed = text.trim()
    if (!trimmed) return                    // ignore empty entries
    setTodos(prev => [...prev, trimmed])    // push new item
    setText('')                              // clear input
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAdd()       // support Enter key
  }

  const handleDelete = (index) => {
    setTodos(prev => prev.filter((_, i) => i !== index))
  }

  // 3) UI
  return (
    <>
      <h2>TODO Maker Project</h2>
      <div>
        <input
          type="text"
          className="input"
          value={text}                        // controlled input
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Type a todo..."
        />

        <Button text="Add" onClick={handleAdd} disabled={!text.trim()} />

        <div className="list">
          {todos.map((item, i) => (
            <div className="todo" key={i}>
              <span>{item}</span>
              <button onClick={() => handleDelete(i)}>Delete</button>
            </div>
          ))}

          {todos.length === 0 && <p className="empty">No todos yet</p>}
        </div>
      </div>
    </>
  )
}

export default App
