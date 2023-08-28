import { useState } from "react"
import boxes from "./box"

export default function App(props) {
    const [squares, setSquares] = useState(boxes)
    const styles = props.darkMode?{
        backgroundColor:"#222222"
    }:{
        backgroundColor:"#cccccc"
    }
    
    const squareElements = squares.map(square => (
        <div style={styles} className="box" key={square.id}></div>
    ))
    return (
        <main>
            {squareElements}
        </main>
    )
}
