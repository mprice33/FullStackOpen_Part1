import { useState } from 'react'


const StatisticLine = ({text, value}) => {
  return <p>{text} {value}</p>
}

const Statistics = (props) => {
  if (props.good > 0 || props.neutral > 0 || props.bad > 0) {
    return <>
      <h1>statistics</h1>
      <br></br>
      <StatisticLine text="good" value={props.good}></StatisticLine>
      <StatisticLine text="neutral" value={props.neutral}></StatisticLine>
      <StatisticLine text="bad" value={props.bad}></StatisticLine>
      <StatisticLine text="all" value={props.good+props.neutral+props.bad}></StatisticLine>
      <StatisticLine text="average" value={props.good+props.bad+props.neutral === 0 ? 0 : (props.good-props.bad)/(props.good+props.neutral+props.bad)}></StatisticLine>
      <StatisticLine text="positive" value={props.good+props.bad+props.neutral === 0 ? 0 : (props.good / (props.good+props.neutral+props.bad))*100 + "%"}></StatisticLine>
      </>
    }
    else{
      return <>
      <h1>statistics</h1>
      <br></br>
      <p>No feedback given</p>
      </>
    }
}

//TODO remove old unusued average component. Will remove on final submission due to possible refactoring in future
const Average = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const diff = good - bad
  if (total === 0) {
    return <p>average 0</p>
  }else{
    return <p>average {diff / total}</p>
  }
}

//TODO remove old unusued average component. Will remove on final submission due to possible refactoring in future
const Positive = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  if (total === 0) {
    return <p>positive 0 %</p>
  }else{
    return <p>positive {(good / total) * 100} %</p>
  }
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
    <h1>give feedback</h1>
    <br></br>
    <Button handleClick={() => setGood(good + 1)} text={"good"}></Button>
    <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"}></Button>
    <Button handleClick={() => setBad(bad + 1)} text={"bad"}></Button>
    <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
    )
}

export default App
