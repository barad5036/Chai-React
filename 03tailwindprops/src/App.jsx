import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username: "Barad Dhruvsinh",
    age: 21
  }
  const [count, setCount] = useState(0)

  return (
    <>
     <Card channelname="Dhruv Barad Official Channel" btn = "Watch Profile"/>
     <Card channelname="Dushyant Barad Official Channel"/>
    <h1 className='bg-orange-400 font-mono pl-4 px-4 py-4'>Tailwind React</h1>
   
    </>
  )
}

export default App
