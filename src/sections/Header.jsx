import React from 'react'
import Navigation from '../components/Navigation'
import Hero from './Hero'

const Header = ({prefix = ''}) => {
  return (
    <header id='header'>
        <Navigation prefix={prefix} />
        <Hero />
    </header>
  )
}

export default Header
