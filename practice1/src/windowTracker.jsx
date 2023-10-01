import { useEffect, useState } from "react"

export default function WindowTracker() {
      const[windowWidth,setWindowWdith]= useState(window.innerWidth)

 useEffect(()=>{
 window.addEventListener("resize",function(){
    setWindowWdith(window.innerWidth)
 })
 },[])
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
