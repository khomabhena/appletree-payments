import React from 'react'

const PolicyPoints = ({ point }) => {
  return (
    <span className=' ml-4 md:ml-12 flex items-center gap-2 mt-2'>
        <div className=' text-xl md:text-2xl'>&bull;</div>
        <p className=' text-sm md:text-lg'>{ point }</p> 
    </span>
  )
}

export default PolicyPoints
