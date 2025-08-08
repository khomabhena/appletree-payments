import React from 'react'
import colors from '../data/colors'
import HeroIcons from './HeroIcons'
import getPointerData from '../data/pointer-icons'

const HeroHeading = () => {
    const textColor = colors.primaryColor
    const accent = colors.accentColor
    const data = getPointerData

  return (
    <div className=' flex flex-col justify-end h-full'>
      <h1 style={{ color: accent }} className=' mt-12 md:mt-0 text-xl md:text-4xl lg:text-6xl font-bold'>Activating
        <span style={{color: textColor}}> Africa's</span> 
        <br /><p></p><span style={{color: textColor}}>Digital</span>
        <span> Economy</span></h1>
        <section>
            <p className=' text-gray-300 mt-2 mb-8 md:mb-8 md:mt-8 text-xs md:text-sm lg:text-xl'>Your gateway to Africa's digital economy, enabling seamless<br />collections and payouts across the continent and beyond</p>
          </section>
      
      <section className=' w-full'>
          <section>
            <p className=' text-gray-400 mt-4 md:mt-8 text-xs md:text-sm lg:text-base'>For: Websites | Apps | Crowdfunding | Marketplaces | Platforms | Fintechs</p>
          </section>

          <div className=' flex mt-8 mb-4'>
            {
              data?.map(({image, link, title}) => (
                <HeroIcons image={image} title={title} link={link} />
              ))
            }
          </div>
          
      </section>

    </div>
  )
}

export default HeroHeading
