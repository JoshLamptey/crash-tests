import { useState } from "react"



export default function App(props) {
   

    const styles =props.on? {
        backgroundColor:"#222222"
    }:{
        backgroundColor:"#E9DCC9"
    }

    return (
        <div className="box" 
         onClick={()=>props.Click(props.id)} 
         style={styles}
         ></div>
    )

    
}
