import { useState } from "react"

export default function Form(){
   const [formData,SetFormData] = useState(
    {
      firstName:"",
      lastName:"",
      Email:"",
      textarea:"",
      isFriendly:false,
      employment:"",
      favColor:""
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

   function handleSubmit(event){
    event.preventDefault()
    console.log(formData)
   }


    return(
        <form onSubmit={handleSubmit}>
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
                    checked={formData.employment==="full-time "}
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
               <br />
               <label htmlFor="favColor">What is your favorite color?</label>
               <br/>
               <select
                id="favColor"
                value={formData.favColor}
                onChange = {handleChange}
                name="favColor"
                >
                <option value="">--Choose--</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option  value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <br />
            <button>Send It In</button>
        </form>
    )
}