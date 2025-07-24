import React from 'react'

const PaymentMethodCard = ({ image, title }) => {
  return (
    <div className=' min-w-34 h-14 bg-white rounded-xl flex justify-center items-center'>
      <img className=' cursor-pointer rounded-2xl' src={image} alt={title} />
    </div>
  )
}

export default PaymentMethodCard
