import { useState } from "react";

export default function starWars(){
    const [starWarsData, setStarWarsData]= useState({})
    
    //console.log("component rendered")
    fetch("https://swapi.dev/api/people/1")
        .then(res=>res.json())
        .then(data=> setStarWarsData(data))

        return(
            <div>
                <pre>{JSON.stringify(starWarsData,null,2)}</pre>
            </div>
        )

    }