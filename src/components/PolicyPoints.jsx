import React from 'react'

const PolicyPoints = ({ point }) => {
  return (
    <span className=' ml-12 flex items-center gap-2 mt-2'>
        <div className=' text-2xl'>&bull;</div>
        <p>{ point }</p> 
    </span>
  )
}

export default PolicyPoints
