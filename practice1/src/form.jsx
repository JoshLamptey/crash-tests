import { useState } from "react"

export default function Form(){
   const [formData,SetFormData] = useState(
    {
      firstName:"",
      lastName:"",
      Email:"",
    }
    )


   function handleChange(event){
    SetFormData(prevFormData=>{
      return{
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
   }
 console.log(formData)
    return(
        <form action="">
            <input
             type="text"
             placeholder="First Name"
             onChange={handleChange}
             name="firstName"
             value={formData.firstName}
               />
               <input
             type="text"
             placeholder="Last Name"
             onChange={handleChange}
             name="lastName"
             value={formData.lastName}

               />
              <input
             type="text"
             placeholder="Email"
             onChange={handleChange}
             name="Email"
             value={formData.Email}

               />
        </form>
    )
}