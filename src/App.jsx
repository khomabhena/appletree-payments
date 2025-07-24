import { useState } from 'react'
import './App.css'
import Container from './pages/Container'
import MyContext from './context/MyContext'

function App() {

  const [mobileNav, setMobileNav] = useState(false)

  return (
    <>
    <MyContext.Provider value={{mobileNav, setMobileNav}}>
      <Container />
    </MyContext.Provider>
    </>
  )
}

export default App
