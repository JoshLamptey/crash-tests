import Joke from './jokes'
import jokesData from './jokesData'
import './App.css'
import { useState } from 'react'

function App() {
const [count,setCount] = useState(0)

function Add(){
  setCount(count + 1)
  console.log(count)
}

function Minus(){
  setCount(count - 1)
  console.log(count)
}
  return (
    <div className="counter">
            <button onClick={Minus} className="counter--minus">-</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={Add}>+</button>
        </div>
  )

}

export default App