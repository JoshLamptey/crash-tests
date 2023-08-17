import { useState } from "react";

export default function Counter(){
    const [count,setCount] = useState(0)

function Add(){
  setCount((prevCount)=> prevCount +1)

}

function Minus(){
 setCount((prevCount)=> prevCount -1)
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