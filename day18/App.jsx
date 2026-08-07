import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Component1 from './Components/Component1'
import Component2 from './Components/Component2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
          <h1>hey this is App</h1>
            <Component1 />
            <Component2 />
    </>
  )
}

export default App
