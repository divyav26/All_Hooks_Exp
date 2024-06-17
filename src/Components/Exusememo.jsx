import React, { useMemo, useState } from 'react'

const Exusememo = () => {
    const [value, setValue] = useState(0)
    const [counter, setCounter] = useState(0)

    // when we click on counter btn but it execute number fun also
    // solve this problme using useMemo 
    const cubefun = (value)=>{
        console.log("cal is done !!")
        return Math.pow(value ,3)
    }
    let res =useMemo(()=>{
        return cubefun(value)
    },[value])
  return (
    <div>
      <input type='text' value={value} onChange={(e)=>setValue(e.target.value)} />
      <h1>Result of Cube {res} </h1>

      <button onClick={()=>setCounter(counter+1)}>Counter +++ </button>
      <h1>Counter Runing {counter}</h1>
    </div>
  )
}

export default Exusememo
