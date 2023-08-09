export default function Joke(props) {
    return (
        <div>
            <button>click me</button>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            <p>Punchline: {props.punchline}</p>
            <hr />
        </div>
    )
}