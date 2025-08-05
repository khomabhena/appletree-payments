import React from 'react'
import colors from '../data/colors'
import paymentMethodsOffered from '../data/payment-methods'
import PaymentMethodCard from '../components/PaymentMethodCard'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'

const PaymentMethods = () => {
    const colorPrimary = colors.primaryColor
    const textLight = colors.primaryLight
    const data = paymentMethodsOffered

  return (
    <section id='payment-methods' className=' -z-10 flex flex-col items-center px-4 lg:px-12 pb-12' style={{ backgroundColor: colorPrimary }}>
      <h2 className=' text-xl md:text-2xl lg:text-3xl pt-12 font-bold'>Payment Methods</h2>
      
      <h3 style={{ color: textLight }} className=' mt-2 text-center text-lg md:text-2xl lg:text-3xl font-extralight'>Local and International Cards <br />Instant Bank Transfers, Mobile Money</h3>
    
        <section className=' w-full bg-red-600f overflow-scroll payment-method-scroll  mt-16 flex gap-y-4  gap-4 min-h-16 justify-between items-center'>
          {
            data?.map(({image, title}) => (
              <PaymentMethodCard image={image} title={title} />
            ))
          }
        </section>
    </section>
  )
}

export default PaymentMethods
