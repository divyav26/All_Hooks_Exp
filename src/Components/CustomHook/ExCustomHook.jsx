import React, { useEffect, useState } from 'react'
import useLocalStorage from './useLoaclStorage'

const ExCustomHook = () => {
   const [name, setName] = useLocalStorage('username','')
   const [id, setId] = useLocalStorage('id','')
  return (
    <div>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
      <h1>Hello !! {name}</h1>
      <input type='text' value={id} onChange={(e)=>setId(e.target.value)} />
      <h1>Your Id is {id}</h1>
    </div>
  )
}

export default ExCustomHook
