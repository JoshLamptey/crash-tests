import { useState } from "react"

export default function Form(){
   const [formData,SetFormData] = useState(
    {
      firstName:"",
      lastName:"",
      Email:"",
      textarea:"",
      isFriendly:false,
      employment:""
    }
    )
console.log(formData.employment)

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
           
              <input
              name="isFriendly"
              type ="checkbox"
              id = "isFriendly"
              checked={formData.isFriendly}
              onChange={handleChange}
              />
              <label htmlFor="isFriendly" >Are You Friendly</label>
              <br />
               <br />
            <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    name="employment"
                    type="radio"
                    id="unemployed"
                    value="unemployed"
                    checked={formData.employment==="unemployed"}                    
                    onChange={handleChange} 
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    name="employment"
                    type="radio"
                    id="part-time"
                    value="part-time" 
                    checked={formData.employment==="part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    name="employment"
                    type="radio"
                    id="full-time"
                    value="full-time"
                    checked={formData.employment==="full-time"}
                    onChange={handleChange} 
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>
            <br />
            <textarea 
               name="textarea" 
               placeholder="comments"
               id="" 
               cols="30"
               rows="10" 
               value={formData.textarea}
               onChange={handleChange}
               />
        </form>
    )
}