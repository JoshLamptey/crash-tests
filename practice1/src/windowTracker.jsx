import { useEffect, useState } from "react"

export default function WindowTracker() {
      const[windowWidth,setWindowWdith]= useState(window.innerWidth)

 useEffect(()=>{

  function watchWidth(){
    console.log("its mounted")
    setWindowWdith(window.innerWidth)
  }

    window.addEventListener("resize",watchWidth)

    return ()=>{
        console.log('unmounted')
        window.removeEventListener("resize",watchWidth)
    }
 },[])
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
