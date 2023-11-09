
import './App.css'
import Card from './components/Card'

function App() {
  let myObj={
    name:"mukram",
    age:35
  }

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4 mb-4'>Tailwind CSS</h1>
      <Card username="pinky" someObj="click me"/>
      <Card username="rani"/>

    </>
  )
}

export default App
