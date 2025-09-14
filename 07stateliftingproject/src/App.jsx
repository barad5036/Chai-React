import { useState } from 'react'
import './App.css'
import Isloggedin from './Components/loggedin'
import Isloggedout from './Components/loggedout'
export default function Accordion(){
  const [activeindex,setactiveindex] = useState(0)
  return (
    <>
    <h2>Mewad,Raigadh</h2>
    <Panel
    title="Maharana Pratap"
    isactive={activeindex === 0}
    onshow={() => setactiveindex(0)}
    >
      Maharana Pratap was the Rajput King Who fought for years to remove the Mughal Saltanat.
    </Panel>
    <Panel
    title="Chatrapati Shivaji Maharaj"
    isactive={activeindex === 1}
    onshow={() => setactiveindex(1)}
    >
      Chatrapati Shivaji Maharaj has woned his first fort at the age of 16 only. He was known for his bravery.
    </Panel>
    </>
  )
}
function Panel({title,isactive,onshow,children}){
  return (
    <section className='panel'>
      <h3>{title}</h3>
      {isactive ? <p>{children}</p> : <button onClick={onshow}>show</button>}
    </section>
  )

}
// function App() {
//   const [isloggedin,setisloggedin] = useState(false)
 

//   return (
//     <>
//     {/* <h2>Hello, Welcome to the project</h2>
//     <div>
//     {isloggedin ? <Isloggedin /> : <Isloggedout />}
//     </div> */}
//     </>
//   )
// }

// export default App
