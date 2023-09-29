import { useEffect, useState } from "react";

export default function starWars(){
    const [starWarsData, setStarWarsData]= useState({})
    const [count,setCount] =useState(1)
   



   useEffect(function(){
    console.log("effect ran")
  fetch(`https://swapi.dev/api/people/${count}`)
  .then(res=>res.json())
  .then (data=>setStarWarsData(data))
   },[count])
        return(
            <div>
                  <button onClick={()=>setCount(prevCount=> prevCount+1)}>Get The Next Character</button>
               <pre>{JSON.stringify(starWarsData,null,2)}</pre>
                <h2>the count is {count}</h2>
            </div>
        )

    }