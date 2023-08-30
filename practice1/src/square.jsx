import { useState } from "react"



export default function App(props) {
   const [on,setOn] = useState(props.on)

    const styles = on? {
        backgroundColor:"#222222"
    }:{
        backgroundColor:"#FFFFF0"
    }
    function toggle(){
        setOn(prevOn=>!prevOn)
    }
    return (
        <div className="box" onClick={toggle} style={styles}></div>
    )

    
}
