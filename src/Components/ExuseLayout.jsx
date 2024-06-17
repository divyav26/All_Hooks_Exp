import React, { useEffect, useLayoutEffect } from 'react'

const ExuseLayout = () => {
  // it call third 
    useEffect(()=>{
        console.log("Message from useEffect!!")
    })

    // it call first 
    //it use for dom and api call also
    //but it has some side effect that why we can not use it more
    useLayoutEffect(()=>{
        console.log("Message from useLayoutEffect !!")
    })
  return (
    <div>
      {/* it call second  */}
      <h1>Test Message</h1>
      {
        Array(4).fill('').map((item,index)=>(
          <li>{Math.pow(Math.random(),10)}</li>
        ))
      }
    </div>
  )
}

export default ExuseLayout
