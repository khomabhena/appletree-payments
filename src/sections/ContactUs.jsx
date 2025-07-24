import React from 'react'
import colors from '../data/colors'

const ContactUs = () => {
    const primaryColor = colors.primaryColor

  return (
    <section id='contact' className=' flex flex-col bg-black items-center mt-16 pb-24' >
      <h2 className=' mt-8 text-xl text-white md:text-2xl lg:text-3xl font-bold'>Contact Us</h2>

      <section className=' flex flex-col-reverse lg:flex-row w-full md:w-full lg:w-fit mt-12 px-4 lg:px-24 gap-8'>

          <footer className=' text-white basis-2/6 '>
            <h4 className=' text-2xl font-medium' style={{ color: primaryColor }}>Zimbabwe</h4>
            <p className=' mt-8 text-lg'>Appletree Digital Commerce</p>
            <p className=' text-lg'>191 Enterprise Road</p>
            <p className=' text-lg'>Chisipite</p>
            <p className=' text-lg'>Harare</p>
            <p className=' text-lg mt-8'>infor@appletreepayments.com</p>
            <div className=' flex gap-4 mt-2 py-2 rounded-xl px-4'>
                <p>fb</p>
                <p>Ins</p>
                <p>X</p>
                <p>In</p>
            </div>
          </footer>

          <form className=' pb-8 pt-2 px-8 basis-6/6 lg:basis-4/6 flex flex-col text-white border-green-500 border-2 rounded-2xl'>
            <input className=' text-base lg:text-lg font-light mt-2 py-2 px-4 mr-4 text-white border-b-2 border-gray-800' placeholder='Full Name' type="text" name="Full Name" id="" />
            <input className=' text-base lg:text-lg font-light mt-2 py-2 px-4 mr-4 text-white border-b-2 border-gray-800' placeholder='Email' type="email" name="Email" id="" />
            <input className=' text-base lg:text-lg font-light mt-2 py-2 px-4 mr-4 text-white border-b-2 border-gray-800' placeholder='Mobile Number' type="number" name="" id="" />
            <div className=' text-base lg:text-lg font-light mt-4 flex flex-col lg:flex-row gap-4 pr-4 justify-between w-full '>
                <textarea className=' border-gray-800 border-b-2 py-2 px-4 text-base lg:text-lg' placeholder='Your Message' cols="50" rows="3" name="Your Message" id=""></textarea>
                <button className=' text-sm cursor-pointer px-4 lg:px-8 py-2 text-black font-medium rounded-2xl h-fit self-end' style={{ backgroundColor: primaryColor }}>Send Message</button>
            </div>
          </form>

      </section>

    </section>
  )
}

export default ContactUs
