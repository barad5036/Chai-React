import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0);
  const [color,setColor] = useState("grey");
    function handleclick(){
    setCount(count+1);
  }
  function getcolor(){
    let r = Math.round(Math.random() * 255)
    let g = Math.round(Math.random() * 255)
    let b = Math.round(Math.random() * 255)
    return `rgb(${r},${g},${b})`;
  }
  function handlecolor(e){
    e.stopPropagation();
    setColor(getcolor())
  }
  // varaition 1 : without any dependencies, no return function(a cleanup function), It show side-effects on every rendering
  // at the starting it takes because the useState is starting from 0, hence it is value and for that reason it is rendering or showing alert.
  // useEffect is a react hooks which in simple words can be called as a side-effect as happening on event it leads to the happening of another event after rendering.
  // as taking medicines has side-effects similar to that clicking on a button, bgc changing, photo changing, entering to login page and many events can happen at the same time and this is the power of react or react hook useEffect.
  // useEffect(() => {
  //   alert("you clicked on the button");
  // })

  // variation 2 : taking a blank dependency, will only work while first rendering
  // useEffect(() => {
  //   // alert("This is the first and last useEffect use");
  //   console.log("The count is : ",count)
  // }, [count]);
  
  // varaition 3 : taking the lsit of depencies or the states which we are willing to change or the effects that we eager to have.
    useEffect(() => {
    // alert("This is the first and last useEffect use");
    console.log("The count is : ",count)
  }, [count,color]);
  return (
    <>
    <div style={{ backgroundColor: color, padding: "20px" }}>
    <h2>Hello, useEffect Basics..</h2>
    <button onClick={handleclick}>click me</button>
    <p>The count is : {count}</p>
    <button onClick={handlecolor}>Change color</button>
    </div>
    </>
  )
}

export default App
