import React from 'react'
import AboutLeaves from '../components/AboutLeaves'
import aboutNumbers from '../data/about-numbers'

const About = () => {
    const data = aboutNumbers
  return (
    <section id='about' className=' flex flex-col items-center mt-16 mb-16' >
      <h2 className=' mt-8 text-xl md:text-2xl lg:text-3xl font-bold'>About</h2>

      <p className=' px-8 lg:px-24 mt-2 text-center text-sm md:text-lg lg:text-xl font-extralight'> Appletree Payments provides end-to-end global commerce tools that merchants need to build businesses, accept payments and enable commerce for their users on Websites, 
Mobile Apps, Crowdfunding Apps, Marketplaces, Platforms and Fintechs.</p><br />
 <p className=' px-8 lg:px-24 text-center text-sm md:text-lg lg:text-xl font-extralight'>With an Africa rst strategy, we give innovators next-gen payment solutions and enable merchants in 79+ Countries to accept, split payments and automate payouts online in 
100+ currencies and multiple payment methods.</p><br />
 <p className=' px-8 lg:px-24 text-center text-sm md:text-lg lg:text-xl font-extralight'>Our developer-friendly API and White-Label solutions can be easily integrated into any design to power payments: Websites, Apps, Marketplaces, Platforms and Fintechs.</p>
    
        <section className=' flex px-8 md:px-4 mt-16 gap-4 w-full items-center flex-wrap justify-evenly'>
            {
                data?.map(({country, number}) => (
                    <AboutLeaves country={country} number={number} />
                ))
            }
        </section>

    </section>
  )
}

export default About
