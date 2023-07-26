import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// challenge 1
// multiply the values of the numbers array by 6 using the map function

const numbers = [9,67,98,2,3,4,90]

// solution

const multiplied = numbers.map((num)=>{

  return num*6

})
//console.log(multiplied)

// challenge 2 
// capitalize the first letter of values of the array and reverse it

const names = ["alice","baiana","makeba","tempoe","vicci"]

//solution
const capitalized = names.map((name)=>{
  return name[0].toUpperCase()+name.slice(1)
  }).reverse();

//console.log(capitalized)
//challenge 3
// put the values in the action variables in an html <p></p>

const action = ["pokemon","sonic","lara Croft","Tom Clancy","Simon Ghost Riley"]

const sorted = action.map((games)=>{
  return `<p>${games}</p>`
})
//console.log(sorted)

const  colors =[
  "red",
  "violet",
  "yellow",
  "green",
  "blue",
] 
return(
  <div>
    {colors}
  </div>
)

}

export default App