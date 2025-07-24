import React from 'react'

const HeroIcons = ({image}) => {
  return (
    <div className='w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 rounded-full p-1 cursor-pointer '>
      <img src={image} alt={image} />
    </div>
  )
}

export default HeroIcons
