import React from 'react'

const UseCasesFields = ({image, title}) => {
  return (
    <article className=' flex flex-col flex-wrap sbasis-2/6 smd:basis-2/6 slg:basis-1/6 text-center justify-baseline items-center w-40'>
      <img className=' h-36 w-36' src={image} alt={title} />
      <p className=' min-h-16 mt-4 font-bold'>{title}</p>
    </article>
  )
}

export default UseCasesFields
