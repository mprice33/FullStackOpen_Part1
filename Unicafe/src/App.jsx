import { useState } from 'react'




const Statistics = (props) => {
  return <>
    <h1>statistics</h1>
    <br></br>
    <p>good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
    <p>total {props.good+props.neutral+props.bad}</p>
    <Average good={props.good} neutral={props.neutral} bad={props.bad}></Average>
    <Positive good={props.good} neutral={props.neutral} bad={props.bad}></Positive>
    </>
}

const Average = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const diff = good - bad
  if (total === 0) {
    return <p>average 0</p>
  }else{
    return <p>average {diff / total}</p>
  }
}

const Positive = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  if (total === 0) {
    return <p>positive 0 %</p>
  }else{
    return <p>positive {(good / total) * 100} %</p>
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
    <h1>give feedback</h1>
    <br></br>
    <button onClick={() => setGood(good + 1)}>good</button>
    <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
    <button onClick={() => setBad(bad + 1)}>bad</button>
    <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
    )
}

export default App
