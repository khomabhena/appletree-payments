import React, { useContext } from 'react'
import MyContext from '../context/MyContext'
import colors from '../data/colors'

const Navigation = () => {
   const {mobileNav, setMobileNav} = useContext(MyContext)
   const textColor = colors.primaryColor

  return (
    <nav className=' fixed top-0 left-0 right-0 bg-black flex justify-between items-center px-4 h-18'>
      <img className=' cursor-pointer h-14 md:h-18 mt-4 md:mt-8 w-auto' src="/appletree-payments-logo-white.png" alt="White Appletree logo" />

      <ul className=' hidden lg:flex gap-8 text-base pr-4' style={{ color: textColor }}>
        <li className=' hover:text-green-800 hover:scale-105'><a href="#payment-solutions">Payment Solutions</a></li>
        <li className=' hover:text-green-800 hover:scale-105'><a href="#use-cases">Use Cases</a></li>
        <li className=' hover:text-green-800 hover:scale-105'><a href="#payment-methods">Payment Methods</a></li>
        <li className=' hover:text-green-800 hover:scale-105'><a href="#about">About</a></li>
        <li className=' hover:text-green-800 hover:scale-105'><a href="#contact">Contact</a></li>
      </ul>

      {!mobileNav && <img onClick={() => {setMobileNav(!mobileNav)}} className=' lg:hidden cursor-pointer h-8 w-8' src='/menu-icon-white.svg' width={'auto'} height={'24px'} alt='menu close icon'  />}
      {mobileNav && <img onClick={() => {setMobileNav(!mobileNav)}} className=' lg:hidden cursor-pointer h-10 w-10' src='/close-icon-white.svg' width={'auto'} height={'32px'} alt='menu close icon'  />}
    </nav>
  )
}

export default Navigation
