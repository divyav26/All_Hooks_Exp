import { type } from '@testing-library/user-event/dist/type'
import React, { act, useReducer, useState } from 'react'

const ExuseReducer = () => {
    // const [count ,setCount] = useState(0)
    // it is same as usestate there are some diff 

    const initialState = {count:0}

    const reducer = (state, action)=>{
       switch(action.type){
        case 'inc':{
            return {count:state.count+1}
        }
        case 'des':{
            return {count:state.count-1}
        }
        case 'input':{
            return {count: state.payload}
        }
        default:{
            return state
        }
       }
    }
    const [state, dispatch] = useReducer(reducer,initialState)

  return (
    <div>
        <h1>{state.count}</h1>
        {/* <button onClick={()=>setCount(prev=>prev+1)}>Increase</button>
        <button onClick={()=>setCount(prev=>prev-1)}>Decrease</button> */}
        <button onClick={()=>dispatch({type:'inc'})}>Increase</button>
        <button onClick={()=>dispatch({type:'des'})}>Decrease</button>
        <input value={state.count} type='text' onChange={(e)=>dispatch({type:'input', payload:Number(e.target.value)})}/>
    </div>
  )
}

export default ExuseReducer
