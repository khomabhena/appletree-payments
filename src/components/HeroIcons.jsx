import React from 'react'
import colors from '../data/colors'

const HeroIcons = ({image, title }) => {
  return (
    <div className=' group w-8 h-8 mb-8 md:w-10 text-center md:h-10 lg:w-14 lg:h-14 rounded-full p-1 cursor-pointer '>
      <img src={image} alt={image} />
      <p className=" invisible group-hover:visible text-sm mt-2 font-medium transition-all transition-discrete ease-in-out" style={{ color: colors.primaryColor }}>{title}</p>
    </div>
  )
}

export default HeroIcons
