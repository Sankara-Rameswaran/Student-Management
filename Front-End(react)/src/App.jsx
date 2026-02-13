import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import AllRoutes from './routes/AllRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <AllRoutes />
    </>
  )
}

export default App
