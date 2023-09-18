import Joke from './jokes'
import jokesData from './jokesData'
import './App.css'
import Counter from './counter'
import Ternary from './ternary'
import Add from './adding'
import User from './profile'
import Square from "./square"
import { useState } from 'react'
import boxes from './box'
import Form from './form'
import SignUp from './signup'




function App() {
  /*
  const [squares, setSquares] = useState(boxes)
  
  function toggle(id){
    setSquares(prevSquares=>{
      return prevSquares.map((square)=>{
        return square.id=== id ? {...square,on: !square.on}:square
      })
    })
  }


  const squareElements = squares.map((square)=>{
    return (<Square
      Click={toggle} 
      id = {square.id}
       key={square.id} 
       on ={square.on}
       />)
  })


const jokeElements = jokesData.map(joke=>{
  return <Joke
  key = {joke.id}
  setup = {joke.setup}
  punchline= {joke.punchline}
  />
})
  return (
    <div>
      {jokeElements}
 </div> )
 */
return(
  <SignUp/>
)


}


export default App