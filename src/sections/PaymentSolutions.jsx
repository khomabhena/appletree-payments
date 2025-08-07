import React from 'react'
import colors from '../data/colors'
import PaymentSolutionsFields from '../components/PaymentSolutionsFields'
import paymentSolutionsData from '../data/payment-solutions'

const PaymentSolutions = () => {
    const colorPrimary = colors.primaryColor
    const textLight = colors.primaryLight
    const data = paymentSolutionsData

  return (
    <section id='payment-solutions' className=' flex flex-col items-center mt-8 mx-2 md:mx-4'>
      <h2 className=' mt-8 text-base md:text-2xl lg:text-3xl font-bold'>Payment Solutions</h2>
      
      <p style={{ color: textLight }} className=' mt-2 text-center text-sm md:text-2xl lg:text-3xl font-extralight'>Everything you need to launch <br />and scale your business in one place</p>
      
      <article 
        style={{ backgroundColor: colorPrimary }} 
        className=' flex rounded-xl md:rounded-4xl flex-wrap mt-8 lg:mt-18 w-full px-4 md:px-8 lg:px-18 py-4 md:py-8'>
        {
            data?.map(({image, title, desc}) => (
                <PaymentSolutionsFields image={image} desc={desc} title={title} />
            ))
        }
      </article>

    </section>
  )
}

export default PaymentSolutions
