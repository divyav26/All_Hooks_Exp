import React, { useState } from 'react'

const ExuseState = () => {
    // single  
    // const [color, setColor] = useState('red')

    // const handleColor =()=>{
    //     setColor("blue")
    // }

    // multiple  =>we can create object insect using useState

    const [car,setCar] = useState({
        brand:"Ferrari",
        model:"Roma",
        year:"2023",
        color:'red',
    })

    const [count, setCount] = useState(0)

    // it is not right way to update object 
    // const handleColor = ()=>{
    //     setCar({color:"blue"})
    // }

     const handleColor = ()=>{
        setCar((prev)=>{
            return {...prev,color:"blue"}
        })
    }

    // change state based on prev 
    const handleCount = ()=>{
        // setCar(count+1) you can not use like this
        setCount((prevCount)=> prevCount + 1)
        setCount((prevCount)=> prevCount + 1)
        setCount((prevCount)=> prevCount + 1)
        setCount((prevCount)=> prevCount + 1)
    }
    
  return (
    <div>
      {/* <h1>This is my Fav {color}</h1>
    <button onClick={handleColor}>Change color</button> */}
    <h1>This is my Car {car.brand}</h1>
    <h2>color {car.color} model {car.model} year {car.year}</h2>
    <button onClick={handleColor}>Change Color</button>

    <h1>Counter program</h1>
    <h2>Count {count}</h2>
    <button onClick={handleCount}>Increate By 4</button>
    </div>
  )
}

export default ExuseState
