import { useState, useEffect } from 'react'
import './App.css'
import NewComponent from './NewComponent'
import ControlledForm from './ControlledForm'

function App() {

  // state is a way of storing data
  // things will change throughout the lifetime of the app and we want to track those changes
  // state affects the rendering of a page and can trigger a re-render

  const [changingText, setChangingText] = useState('hello')
  // for changingText --> default value empty string since this will be a string later

  const [data, setData] = useState([])

  // useState is a react hook


  // props --> data passed from one component to another
  // const data = "I AM DATA"

  const helloIAmAppScoped = "Definitely app scoped"

  function someCallback() {
    console.log( helloIAmAppScoped )
  }

  useEffect(() => {
    console.log("I AM AN EFFECT")
    setChangingText( changingText + "o" )
  }, [])

  // effect --> something that happens without user input

  // empty dependency array --> only run once on the initial render and then stop

  return (
    <>

      { changingText }

      <p>New Component is inside of App</p>

      <p>App is the parent and NewComponent is the child</p>

      <NewComponent coolData={data} someCallback={someCallback} />

      <p>Define things in technical terms</p>

      <p>Controlled form / input</p>

      <p>Components</p>

      <ControlledForm />


    </>
  )
}

export default App
