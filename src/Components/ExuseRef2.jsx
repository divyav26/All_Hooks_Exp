import React, { useRef } from 'react'


//Example of dom
const ExuseRef2 = () => {
    const inputElement = useRef()
    console.log(inputElement.current)
    const handleinput = ()=>{
        inputElement.current.style.background = "blue"
        console.log(inputElement.current)
    }

  return (
    <div>
      <input type='text' ref={inputElement}/>
      {/* ref =>like this we can access dom element */}
      <button onClick={handleinput}>Click Here</button>
    </div>
  )
}

export default ExuseRef2
