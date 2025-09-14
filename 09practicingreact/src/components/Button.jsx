import React from 'react'

const Button = ({ onClick, text, children }) => {
  return (
    <div>
      {/* {children} */}
      <button onClick={onClick}>
        {text}
      </button>
    </div>
  )
}

export default Button
