import { useState } from "react"
/*
export default function Add() {
    
    const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        // We'll work on this next
        
        
        setThingsArray((prevThingsArray) =>{ 
       return [...prevThingsArray,`Thing ${prevThingsArray.length + 1}`] 
        })
        }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}*/

export default function Add(){
    const [thingsArray,setThingsArray] = useState(["Thing 1", "Thing 2"])
    
    function addItem(){
        setThingsArray((prevState)=>{
            return [...prevState,`Thing ${prevState.length + 1}`]
        })
    }

    const things = thingsArray.map(thing=>{
     return    <p key={thing}>{thing}</p>
})
        
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {things}
        </div>
    )
}