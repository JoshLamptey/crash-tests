import { useState } from "react"

export default function Ternary(){
    const [isGoingOut,setIsGoingOUt] = useState(true)

    function Change(){
        setIsGoingOUt(prevState=>!prevState)
    }
    
    

let answer = isGoingOut? "yes" :"no"
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div  onClick={Change}  className="state--value">
                <h1>{answer}</h1>
            </div>
        </div>
    )
}