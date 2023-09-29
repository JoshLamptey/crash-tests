import { useEffect, useState } from "react";

export default function starWars(){
    const [starWarsData, setStarWarsData]= useState({})
    const [count,setCount] =useState(0)
   



   useEffect(function(){
    console.log("effect ran")
  fetch("https://swapi.dev/api/people/1")
  .then(res=>res.json())
  .then (data=>setStarWarsData(data))
   },[])
        return(
            <div>
               <pre>{JSON.stringify(starWarsData,null,2)}</pre>
                <h2>the count is {count}</h2>
                <button onClick={()=>setCount(prevCount=> prevCount+1)}>add</button>
            </div>
        )

    }