import React, { useEffect, useRef, useState } from 'react'

const ExuseRef = () => {
    const[value, setValue] = useState(0)
    // const [count, setCount] =useState(0)
    // useEffect(()=>{
    //     setCount((c)=>c+1) // it run infinite loop because it render many time
    //                         // in this case we use useRef hook
    // })
    const count = useRef(0)
    // useRef =>we use when we want to not render the comp  when value is change
    useEffect(()=>{
        count.current = count.current + 1
    })
  return (
    <div>
      <button onClick={()=>setValue((prev)=>prev +1)}>+1</button>
      <h1>{value}</h1>
      <button onClick={()=>setValue((prev)=>prev- 1)}>-1</button>
      {/* <h1>{count}</h1> */}
      <h1>Render Count {count.current}</h1>
    </div>
  )
}

export default ExuseRef
