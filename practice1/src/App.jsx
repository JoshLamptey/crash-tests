import Joke from './jokes'
import jokesData from './jokesData'
import './App.css'

function App() {
  const jokeElements = jokesData.map((joke)=>{
    return <Joke
    setup= {joke.setup}
    punchline={joke.punchline}
    />
  })
  return (
    <div>
      {jokeElements}
    </div>
  )

}

export default App