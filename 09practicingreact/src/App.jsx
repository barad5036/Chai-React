import { useState } from 'react'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  const [counter, setCounter] = useState(0);

  function handleClickPlus() {
    setCounter(counter + 1);
  }

  function handleClickMinus() {
    setCounter(counter - 1);
  }

  return (
    <>
      <h2>Hello, welcome to practicing projects..</h2>

      <Card name="kem che baka ?">
        <h2>Hello I am the 1 children</h2>
        <h2>I am going to start the session soon</h2>
        <h3>Its my honour to meet you all</h3>
      </Card>

      <Card>
        <h3>
          Hello I am the 2 children. Inside Card tag, children (nested JSX) is
          the first priority, and then comes the written "children" prop. 
        </h3>
      </Card>

      {/* Counter Display */}
      <h1>Counter: {counter}</h1>

      {/* Add One Button */}
      <Button onClick={handleClickPlus} text="+" />

      {/* Delete One Button */}
      <Button onClick={handleClickMinus} text="-" />
    </>
  )
}

export default App
