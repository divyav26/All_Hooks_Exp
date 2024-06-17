import React, { useEffect, useLayoutEffect } from 'react'

const ExuseLayout = () => {
    useEffect(()=>{
        console.log("Message from useEffect!!")
    })

    useLayoutEffect(()=>{
        console.log("Message from useLayoutEffect !!")
    })
  return (
    <div>
      
    </div>
  )
}

export default ExuseLayout
