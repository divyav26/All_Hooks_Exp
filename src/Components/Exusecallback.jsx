import React, { useCallback, useState } from 'react'
import Header from './UseCallback/Header'
const Exusecallback = () => {
    const [count, setCount] = useState(0)
    const newFun = ()=>{} //it render all time
    // we can solve it useing useCallback
    const newFun1 =  useCallback(()=>{},[])

  return (
    <div>
        <Header newFun1={newFun1} />
      <h1>{count}</h1>
      <button onClick={()=>setCount((prev)=>prev+1)}>Click</button>
    </div>
  )
}

export default Exusecallback
