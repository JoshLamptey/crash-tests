import StarFilled from "./starFilled.png"
import StarEmpty from "./starEmpty.png"

export default function Star(props){
    const starry = props.isFilled ? StarFilled : StarEmpty 
    
    return(
        <img 
        src={starry}
        className="card--favorite"
        onClick={props.handleClick}
    />
    
    )
    
}