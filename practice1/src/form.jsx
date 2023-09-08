import { useState } from "react"

export default function Form(){
   const [firstName,SetFirstName] = useState("")

   const [lastName,SetLastName] = useState("")


   function handleChange(event){
    SetFirstName(event.target.value)
    console.log(firstName)
   }
   function handleLastName(event){
    SetLastName(event.target.value)
    console.log(lastName)
   }
    return(
        <form action="">
            <input
             type="text"
             placeholder="First Name"
             onChange={handleChange}
               />
               <input
             type="text"
             placeholder="Last Name"
             onChange={handleLastName}
               />
        </form>
    )
}