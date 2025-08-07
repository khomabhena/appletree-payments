import React from 'react'
import colors from '../data/colors'

const PolicyContainer = ({ children, title }) => {
    
  return (
    <div style={{ color: colors.primaryColor}} className=' min-h-screen w-full max-w-[1080px]'>
      <nav className=' fixed top-0 left-0 right-0 bg-black m-auto max-w-[1080px] z-20 flex justify-between items-center px-4 h-18'>
          <a href="/">
            <img className=' cursor-pointer h-14 md:h-18 mt-4 md:mt-8 w-auto' src="/appletree-payments-logo-white.png"  alt="White Appletree logo" />
          </a>

          <ul className=' text-2xl font-bold hidden lg:flex gap-8 pr-4' style={{ color: colors.primaryColor }}>
            <li className=' hover:text-green-800 hover:scale-105'><a href="/">{ title }</a></li>
          </ul>
      </nav>
      <section>
        { children }
      </section>
    </div>
  )
}

export default PolicyContainer
