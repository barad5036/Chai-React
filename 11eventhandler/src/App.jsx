import { useState } from 'react'

function App() {
  const [click,setclick] = useState(0);
  const [color,setcolor] = useState("grey");
  const [msg,setmsg] = useState(false)

  function handleclick(){
    setclick(click+1);
  }
  function getcolor(){
let r = Math.round(Math.random() * 255);
let g = Math.round(Math.random() * 255);
let b = Math.round(Math.random() * 255);

    return `rgb(${r},${g},${b})`;
  }

  function handlecolor(e){
    e.stopPropagation(); // avoids happening of bubbling effect
    // let bodystyle = document.body.style.backgroundColor = getcolor();
    setcolor(getcolor())
  }
  function handleclickevent(){
    alert("You have clicked the button");
    setmsg(true);
  }
  function onmouseover(){
    alert("You hovered the Hello,Buddy")
  }

  return (
    <>
    {/* <h2>Event Handler Project</h2>
    <div style={{width:"200px",height:"200px",backgroundColor: color}} onClick={handleclick}>
      <button onClick={handlecolor}>Change color</button>
      <p>Count tap on div : {click}</p>
    </div> */}
    <button onClick={handleclickevent}>Click me </button>
    {msg && <p onMouseOver={onmouseover}>Hello,Buddy</p>}
    {/* <p>Hello,Buddy</p> */}
    </>
  )
}

export default App
