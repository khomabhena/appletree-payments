import React from 'react'

const HeroIcons = ({image}) => {
  return (
    <div className='w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full p-1 border-white border-1 lg:border-2 '>
      <img src={image} alt={image} />
    </div>
  )
}

export default HeroIcons
