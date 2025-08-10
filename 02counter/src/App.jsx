import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(4)
  //let counter = 40
  const addvalue = () => {
    //console.log(Math.random())
    //console.log("clicked : ",counter)
    //counter = counter + 1;
    setCounter(counter+1);


    //console.log("value added",Math.floor((Math.random()*10)+1));
  }
  const removevalue = () =>{
    //console.log("clicked : ",counter);
    //counter = counter - 1;
    setCounter(counter-1);
    if(counter <= 0){
      setCounter(0)
    }
  }

  return (
    <>
    <h2>Chai aur React : Counter Project</h2>
    <h2>Counter value : {counter}</h2>
    <button onClick = {addvalue}>Add value</button>
    <br />
    <br />
    <button onClick = {removevalue}>Remove value</button>
    </>
  )
}

export default App
