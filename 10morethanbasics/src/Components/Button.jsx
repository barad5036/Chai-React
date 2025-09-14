const Button = ({ onClick, text, children, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children ?? text}
    </button>
  )
}

export default Button
