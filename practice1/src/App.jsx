import Joke from './jokes'
import jokesData from './jokesData'
import './App.css'

function App() {
  function handleClick(){
    const int = Math.floor(Math.random() *jokesData.length)
    const Punchline = jokesData[int].punchline
    console.log(Punchline)
  }
 
  /* const jokeElements = jokesData.map((joke)=>{
   return <Joke
    setup= {joke.setup}
    punchline={joke.punchline}
    />
  })*/
  return (
    <div>
      <button onClick={handleClick}>click me</button>
    </div>
  )

}

export default App