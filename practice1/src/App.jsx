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





function App() {
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


  return (
    <div>
      {squareElements}
 </div> )
}


export default App