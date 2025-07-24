import React, { useContext } from 'react'
import colors from '../data/colors'
import MyContext from '../context/MyContext'

const MobileNavigation = () => {
  const textColor = colors.primaryColor
  const {mobileNav, setMobileNav} = useContext(MyContext)

  return (
    <nav className=' bg-black lg:hidden fixed px-4 top-0 z-20 left-0 right-0 md:w-[384px] bottom-0'>

      <div className=' flex justify-between h-18 items-center'>
        <img className=' cursor-pointer h-14 md:h-18 mt-4 md:mt-8 w-auto' src="/appletree-payments-logo-white.png" alt="" />
        <img onClick={() => {setMobileNav(!mobileNav)}} className=' cursor-pointer h-8 md:h-10' src='/close-icon-white.svg' width={'auto'} height={'32px'}  />
        
      </div>
    
      <ul className={`bg-black flex flex-col h-full mt-12 md:pl-8 items-center md:items-start gap-y-8 text-base md:text-xl lg:text-2xl`} style={{color: textColor}}>
        <li><a href="#payment-solutions">Payment Solutions</a></li>
        <li><a href="#use-cases">Use Cases</a></li>
        <li><a href="#payment-methods">Payment Methods</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    </nav>
  )
}

export default MobileNavigation
