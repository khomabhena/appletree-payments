import React from 'react'
import colors from '../data/colors'

const HeroIcons = ({image, title, link }) => {
  return (
    <a href={link} target='_blank'>
      <div className=' group w-8 h-8 md:w-10 text-center md:h-10 lg:w-12 lg:h-12 rounded-full p-1 cursor-pointer '>
        <img src={image} alt={image} />
        <p className=" invisible group-hover:visible text-sm mt-2 font-medium transition-all transition-discrete ease-in-out" style={{ color: colors.primaryColor }}>{title}</p>
      </div>
    </a>
  )
}

export default HeroIcons
