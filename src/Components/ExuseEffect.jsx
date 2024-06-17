import React, { useEffect, useState } from 'react'

const ExuseEffect = () => {
    
  const[count, setCount] = useState(0)
 // how many time comp loaded 
 //it call again 2s many time when comp load it call many time
  useEffect(()=>{
    setTimeout(()=>{
      setCount(count =>count+1)
    },2000)
  },[]) 
  // []=> it call only one time when comp loaded
  //[count] =>It call first time when comp loaded and it also
  //          when count state changes

   
  return (
    <div>
      <h1>I am Rendered {count} time</h1>
    </div>
  )
}

export default ExuseEffect
