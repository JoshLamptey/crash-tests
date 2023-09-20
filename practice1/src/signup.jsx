import { useState } from "react";


export default function signUp(){
    const[data,setData] = useState(
        {
            email:"",
            password:"",
            confirmPassword:"",
            join: false
        }
        )

        function handleChange(event){
            const{name,type,value,checked} = event.target
            setData(prevData=>{
                return{
                    ...prevData,
                    [name]:type=== "checkbox"? checked:value
                }
            })
        }

        function handleSubmit(event){
            event.preventDefault()
            if(data.join===true){
                console.log("Thanks for signing up for our newsletter!")
            }
            
        }

        function Validate(){
            if(data.password===data.confirmPassword){
                console.log("Yayyyy you fuggin mug")
            }else{
                console.log('i am too tired to continue bloody existing')
            }
        }

        return(
            <div className="form-container">
                <form onSubmit={handleSubmit} className="form">
                    <input
                     type="email"
                     onChange={handleChange}
                     placeholder="Email Address"
                     className="form--input"
                     name="email"
                     value={data.email}
                      />
                      <input
                       type="password"
                       onChange={handleChange}
                       placeholder="Password"
                       className="form--input"
                       name="password"
                       value={data.password}
                        />
                        <input
                         type="password"
                         onChange={handleChange}
                         placeholder="Confirm Password"
                         className="form--input"
                         name="confirmPassword"
                         value={data.confirmPassword}
                          />
                          <div className="form--marketing">
                            <input
                             type="checkbox"
                             name="join"
                             id="join"
                             checked={data.join}
                             onChange={handleChange}
                              />
                              <label htmlFor="join"> I want to join the newsletter</label>
                          </div>
                          <button onClick={Validate } className="form--submit">Sign Up</button>
                </form>
            </div>
        )
}