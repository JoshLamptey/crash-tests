import { useEffect, useState } from "react";

export default function starWars(){
    const [starWarsData, setStarWarsData]= useState({})
    const [count,setCount] =useState(0)
    console.log("component rendered")
   useEffect(function(){
  fetch("https://swapi.dev/api/people/1")
  .then(res=>res.json())
  .then (data=>setStarWarsData(data))
   },[count])
        return(
            <div>
               <pre>{JSON.stringify(starWarsData,null,2)}</pre>
                <h2>the count is {count}</h2>
                <button onClick={()=>setCount(prevCount=> prevCount+1)}>add</button>
            </div>
        )

    }