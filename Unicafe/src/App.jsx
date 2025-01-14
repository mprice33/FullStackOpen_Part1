import { useState } from 'react'

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
    <h1>statistics</h1>
    <br></br>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>total {good+neutral+bad}</p>
    <Average good={good} neutral={neutral} bad={bad}></Average>
    <Positive good={good} neutral={neutral} bad={bad}></Positive>
    </div>
  )
}

export default App
