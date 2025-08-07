import { useState } from 'react'
import './App.css'
import Container from './pages/Container'
import MyContext from './context/MyContext'
import { Route, Routes } from 'react-router-dom'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {

  const [mobileNav, setMobileNav] = useState(false)

  return (
    <>
    <MyContext.Provider value={{mobileNav, setMobileNav}}>
      <Routes>
        <Route path='/' element={<Container />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes>
    </MyContext.Provider>
    </>
  )
}

export default App
