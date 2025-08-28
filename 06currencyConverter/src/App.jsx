import { useState } from 'react'
import './App.css'
import Currencyboxes from './Components/Currencyboxes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-160 h-144 bg-gray-400 ml-96 opacity-100 shadow-emerald-900 rounded-2xl'>
        {/* Pass prop here */}
        <Currencyboxes />
         <Currencyboxes type="To" />
      </div>
    </>
  )
}

export default App
