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
  const squareElements = squares.map((square)=>{
    return (<Square key={square.id} on ={square.on}/>)
  })
  return (
    <div>
      {squareElements}
 </div> )
}

export default App