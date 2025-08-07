import React from 'react'

const PaymentSolutionsFields = ({ image, title, desc }) => {
  return (
    <div className=' flex mb-8 gap-4 basis-full lg:basis-1/2'>
      <img className=' text-black w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14' src={image} alt={title} />
      <div>
        <p className=' text-base md:text-xl font-medium text-black'>{title}</p>
        <p className=' text-medium text-gray-900 font-light'>{desc}</p>
      </div>
    </div>
  )
}

export default PaymentSolutionsFields
