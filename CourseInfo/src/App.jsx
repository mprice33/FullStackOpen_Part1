
const Header = (props) => {
  return <>
    <h1>{props.course}</h1>
  </>
}

const Part = (props) => {
  return <>
    <p>
      {props.part} {props.exercise}
    </p>
  </>

}


const Content = (props) => {
  return (
    <div>
      <Part part={props.part1.name} exercise={props.part1.exercises} />
      <Part part={props.part2.name} exercise={props.part2.exercises} />
      <Part part={props.part3.name} exercise={props.part3.exercises} />
    </div>
  )
}

// const Content = (props) => {
//   return <>
//     <p>
//       {props.parts[0].part} {props.parts[0].exercise}
//     </p>
//     <p>
//       {props.parts[1].part} {props.parts[1].exercise}
//     </p>
//     <p>
//       {props.parts[2].part} {props.parts[2].exercise}
//     </p>
//   </>
// }

const Total = (props) => {
  return <>
    <p>Number of exercises {props.sum}</p>
  </>
}




/*
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}
*/

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total sum={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}


export default App