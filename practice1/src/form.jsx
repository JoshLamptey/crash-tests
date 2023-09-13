import { useState } from "react"

export default function Form(){
   const [formData,SetFormData] = useState(
    {
      firstName:"",
      lastName:"",
      Email:"",
      textarea:"",
      isFriendly:true
    }
    )


   function handleChange(event){
    const{name,value,type,checked} = event.target
    SetFormData(prevFormData=>{
      return{
        ...prevFormData,
        [name]: type === "checkbox"? checked : value
      }
    })
   }
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
               <textarea 
               name="textarea" 
               id="" 
               cols="30"
               rows="10" 
               value={formData.textarea}
               onChange={handleChange}
               />
              <input
              name="isFriendly"
              type ="checkbox"
              id = "isFriendly"
              checked={formData.isFriendly}
              onChange={handleChange}
              />
              <label htmlFor="isFriendly" >Are You Friendly</label>
        </form>
    )
}