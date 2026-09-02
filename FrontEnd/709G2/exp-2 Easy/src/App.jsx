import React from 'react'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  function increment() {
    setCount(count + 1)

  }
  function decrement() {
    setCount(count - 1)

  }
  function reset() {
    setCount(0)

  }
  return (
    <div>

      {count < 0 ? <h4 style={{ color: "red" }}>{count}</h4> : <h4>{count}</h4>}
      <br />
      <button onClick={increment}>inc</button>
      <button onClick={decrement}>dec</button>
      <button onClick={reset}> reset</button>
    </div>
  )
}

export default App