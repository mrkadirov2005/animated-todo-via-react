import React from "react"
import { useState } from "react"
import "./Counter.css"

const Counter = () => {
  const [message, setMessage] = useState("")
  const [count, setCount] = useState(0)

  const handleReset = () => {
    setCount(0)
  }

  const handlePlus = () => {
    setCount((prevCount) => prevCount + 100)
  }

  const handleDecrement = () => {
    if (count === 0) {
      setMessage("number should not be less than 0")
      return
    } else {
      setMessage("")
    }
    setCount((prevCount) => prevCount - 1)
  }
  const handleIncrement = () => {
    setMessage("")
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div>
      <div>
        <div className='d-flex align-items-center justify-content-around w-25'>
          <button className='plus100' onClick={handlePlus}>
            +100
          </button>
          <button className='plus' onClick={handleIncrement}>
            +
          </button>
          {count ? (
            <h1 className='count' style={{ fontSize: "25px" }}>
              {count}
            </h1>
          ) : (
            0
          )}
          <button
            className='minus'
            // disabled={count === 0}
            onClick={handleDecrement}>
            -
          </button>
          <button className='reset' onClick={handleReset}>
            Reset
          </button>
        </div>
        <p className='error'>{message}</p>
      </div>
    </div>
  )
}

export default Counter
