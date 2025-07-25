import React from 'react'
import {useState}  from 'react'

function Counter() {
  const [count , setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }



  return (
    <div className='counter-container'>
    <p className='count-display'>counter : {count}</p>
    <button className='counter-button' onClick={increment}>+</button>
    <button className='counter-button' onClick={decrement}>-</button>
    <button className='counter-button' onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter