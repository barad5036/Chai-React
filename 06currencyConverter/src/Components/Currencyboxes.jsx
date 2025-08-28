import React from 'react'

// Component name should match the export
function Currencyboxes({ type }) {
  return (
    <div className="p-16 overflow-hidden">
      <div className="w-128 h-28 bg-white overflow-hidden rounded-2xl p-6 shadow-md">
        {/* Labels */}
        <div className="flex justify-between">
          <p className="text-gray-400 font-mono">{type || "From"}</p>
          <p className="text-gray-400 font-mono">Currency Type</p>
        </div>

        {/* Input + Dropdown */}
        <div className="flex justify-between items-center mt-3">
          {/* Input */}
          <input
            type="number"
            placeholder="0"
            className="w-2/3 text-lg font-mono text-gray-700 focus:outline-none"
          />

          {/* Dropdown */}
          <select className="w-24 p-2 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none">
            <option value="usd">USD</option>
            <option value="inr">INR</option>
            <option value="eur">EUR</option>
            <option value="gbp">GBP</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Currencyboxes
