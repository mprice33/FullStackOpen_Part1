import { useState } from 'react'


const StatisticLine = ({ text, value }) => {
  return <tr><td>{text}</td><td>{value}</td></tr>
}

const Statistics = (props) => {
  if (props.good > 0 || props.neutral > 0 || props.bad > 0) {
    return <>
      <h1>statistics</h1>
      <br></br>
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good}></StatisticLine>
          <StatisticLine text="neutral" value={props.neutral}></StatisticLine>
          <StatisticLine text="bad" value={props.bad}></StatisticLine>
          <StatisticLine text="all" value={props.good + props.neutral + props.bad}></StatisticLine>
          <StatisticLine text="average" value={props.good + props.bad + props.neutral === 0 ? 0 : (props.good - props.bad) / (props.good + props.neutral + props.bad)}></StatisticLine>
          <StatisticLine text="positive" value={props.good + props.bad + props.neutral === 0 ? 0 : (props.good / (props.good + props.neutral + props.bad)) * 100 + "%"}></StatisticLine>
        </tbody>
      </table>
    </>
  }
  else {
    return <>
      <h1>statistics</h1>
      <br></br>
      <p>No feedback given</p>
    </>
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
