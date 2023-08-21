import StarFilled from "./starFilled.png"
import StarEmpty from "./starEmpty.png"
import userImg from './assets/images/user.png'
import { useState } from "react"


export default function User(){
    const[contact,setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })


   
 let starIcon = contact.isFavorite? StarFilled : StarEmpty


    function toggleFavorite(){
        setContact((prevState)=>{
            return{
                ...prevState,
                isFavorite: !prevState.isFavorite
            }
        })
        console.log(":)")
    }
    return(
            <main>
                <article className="card">
                    <img src={userImg} className="card--image" />
                    <div className="card--info">
                        <img 
                            src={starIcon}
                            className="card--favorite"
                            onClick={toggleFavorite}
                        />
                        <h2 className="card--name">
                            {contact.firstName} {contact.lastName}
                        </h2>
                        <p className="card--contact">{contact.phone}</p>
                        <p className="card--contact">{contact.email}</p>
                    </div>
                    
                </article>
            </main>
    )
}