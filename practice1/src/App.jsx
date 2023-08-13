import Joke from './jokes'
import jokesData from './jokesData'
import './App.css'
import { useState } from 'react'

function App() {
 const [result,setResult] =  useState("yes")
  console.log(result)
  function handleClick(){
   setResult("No")
  }
 
  /* const jokeElements = jokesData.map((joke)=>{
   return <Joke
    setup= {joke.setup}
    punchline={joke.punchline}
    />
  })*/
  return (
    <div>
      <button onClick={handleClick}>{result}</button>
    </div>
  )

}

export default App