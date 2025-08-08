import React from 'react'
import colors from '../data/colors'

const HeroIcons = ({image, title, link }) => {
  return (
    <a href={link} target='_blank' className=' '>
      <div className=' group text-center  w-fit flex flex-col items-center p-1 cursor-pointer '>
        <img className=' w-8 h-8 md:w-10 hover:scale-110 duration-100 ease-in-out transition md:h-10 lg:w-12 lg:h-12' src={image} alt={image} />
        <p className=" scale-0 group-hover:scale-100 w-8 md:min-w-18 group-hover:visible text-sm mt-2 font-medium transition-all transition-discrete ease-in-out" style={{ color: colors.primaryColor }}>{title}</p>
      </div>
    </a>
  )
}

export default HeroIcons
