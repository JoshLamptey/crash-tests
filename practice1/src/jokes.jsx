import { useState } from "react"

export default function Joke(props) {
    const [isShow,setIsShow] = useState(false)
    
    function toggleShow(){
        setIsShow(prevState=>!prevState)
    }
    return (
        <div>
        
            {props.setup && <h3>Setup: {props.setup}</h3>}
            {isShow &&<p>Punchline: {props.punchline}</p>}
             <button onClick={toggleShow}> {isShow ? "Hide":"Punch"} Me</button>
         
            <hr />
        </div>
    )
}