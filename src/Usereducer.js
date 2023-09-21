import React, {useState} from 'react'

function Counter () {

    const [count,setCount] = useState(0);

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
        <button onClick={() => setCount((c) => c- 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>RESET</button>

    </div>
  )
}

export default Counter ;