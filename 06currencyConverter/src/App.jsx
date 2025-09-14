// import { useState } from 'react'
// import './App.css'
// import Currencyboxes from './Components/Currencyboxes'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div className='w-160 h-144 bg-gray-400 ml-96 opacity-100 shadow-emerald-900 rounded-2xl'>
//         {/* Pass prop here */}
//         <Currencyboxes />
//          <Currencyboxes type="To" />
//       </div>
//     </>
//   )
// }

// export default App


// import { useState } from "react";

// function App() {
//   const [amount, setAmount] = useState(1);
//   const [from, setFrom] = useState("USD");
//   const [to, setTo] = useState("INR");
//   const [result, setResult] = useState(null);

//   // simple exchange rates (base = USD)
//   const rates = {
//     USD: 1,
//     INR: 83,
//     EUR: 0.92,
//     GBP: 0.79,
//   };

//   function convert() {
//     let fromRate = rates[from];
//     let toRate = rates[to];
//     let converted = (amount / fromRate) * toRate;
//     setResult(converted.toFixed(2));
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Currency Converter</h2>

//       <input
//         type="number"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//       />

//       <select value={from} onChange={(e) => setFrom(e.target.value)}>
//         {Object.keys(rates).map((cur) => (
//           <option key={cur}>{cur}</option>
//         ))}
//       </select>

//       <span> ➡ </span>

//       <select value={to} onChange={(e) => setTo(e.target.value)}>
//         {Object.keys(rates).map((cur) => (
//           <option key={cur}>{cur}</option>
//         ))}
//       </select>

//       <button onClick={convert}>Convert</button>

//       {result && (
//         <p>
//           {amount} {from} = {result} {to}
//         </p>
//       )}
//     </div>
//   );
// }

// export default App;

import React from 'react'
import {useState} from 'react'

function App() {
  const [amount,setamount] = useState(1);
  const [from,setfrom] = useState("USD");
  const [to,setto] = useState("INR");
  const [result,setresult] = useState(null);

  const rates = {
    USD:1,
    INR:83,
    EUR:0.92,
    GBP:0.73
  }
  function convert(){
    let fromrate = rates[from];
    let torate = rates[to];
    let convertresult = (amount/fromrate)*torate;
    setresult(convertresult.toFixed(2));
  }
  return (
    <>
    <div style={{ padding: "20px" }}>
    <h2>Currency Converter Project</h2>
    <input type="number" value={amount} onChange={(e) => setamount(e.target.value)} />
      <select value={from} onChange={(e) => setfrom(e.target.value)}>
        {Object.keys(rates).map((cur) => (
          <option key={cur}value={cur}>{cur}</option>
        ))}
      </select>

      <span> ➡ </span>

      <select value={to} onChange={(e) => setto(e.target.value)}>
        {Object.keys(rates).map((cur) => (
          <option key={cur} value={cur}>{cur}</option>
        ))}
      </select>
      <button onClick={convert} style={{marginLeft:"10px"}}>Convert</button>
      {result && (
        <p>{amount} {from} = {result} {to}</p>
      )
      }
    </div>
    </>
  )
}

export default App
