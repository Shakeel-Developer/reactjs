import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter]=useState(15)
  //let counter=15

  const addValue=()=>{
    console.log("value is added",Math.random());
    //counter=counter+1
    setCounter(counter+1)
  }

  const removeValue=()=>{
    setCounter(counter-1)
  }

  return (
    <>
       <h1>Counter App</h1>
       <h2>Counter No:{counter}</h2>
       <button onClick={addValue}>Add Value</button>
       <br/>
       <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
