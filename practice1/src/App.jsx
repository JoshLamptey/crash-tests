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
  
  function clicked(id){
    setSquares(prevSquare=>{
      const newSquare= []
      for(let i = 0; i<prevSquare.length;i++){
      const currentSquare = prevSquare[i]
      if(currentSquare.id===id){
        const updatedSquare = {
          ...currentSquare,
          on: !currentSquare.on
        }
        newSquare.push(updatedSquare)
      }else{
        newSquare.push(currentSquare)
      }
      }
      return newSquare
    })
  }


  const squareElements = squares.map((square)=>{
    return (<Square
      Click={clicked} 
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