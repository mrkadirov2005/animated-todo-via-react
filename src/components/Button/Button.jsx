import React from "react"
import "./button.css"

const Button = ({ children, handleClick, text }) => {
  return (
    <button className='button' type='submit' onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button
