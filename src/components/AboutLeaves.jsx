import React from 'react'
import colors from '../data/colors'

const AboutLeaves = ({number = 1, country}) => {
    const primaryColor = colors.primaryColor
  return (
    <div className=' flex flex-col items-center gap-4 min-w-36'>
        <div className=' w-25 h-25 flex justify-center items-center rounded-tl-[40px] rounded-br-[40px]' style={{ backgroundColor: primaryColor}}>
          <h1 className=' text-white font-bold text-6xl'>{number}</h1>
        </div>
        <h2 className=' text-center w-full font-extrabold text-lg' style={{ color: primaryColor }}>{country}</h2>
    </div>
  )
}

export default AboutLeaves
