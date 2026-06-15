import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <button className="btn btn-primary text-yellow-200">
      DaisyUI Test
    </button>
    <h1 className='text-4xl font-extrabold'>React</h1>
    </>
  )
}

export default App
