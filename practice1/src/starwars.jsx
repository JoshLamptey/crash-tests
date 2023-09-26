import { useEffect, useState } from "react";

export default function starWars(){
    const [starWarsData, setStarWarsData]= useState({})
    const [count,setCount] =useState(0)
    console.log("component rendered")
   useEffect(function(){
    console.log("effect ran")
   },[count])
        return(
            <div>
               

                <h2>the count is {count}</h2>
                <button onClick={()=>setCount(prevCount=> prevCount+1)}>add</button>
            </div>
        )

    }