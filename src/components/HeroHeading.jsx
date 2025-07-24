import React from 'react'
import colors from '../data/colors'
import HeroIcons from './HeroIcons'

const HeroHeading = () => {
    const textColor = colors.primaryColor
    const accent = colors.accentColor

  return (
    <div className=' flex flex-col justify-end h-full'>
      <h1 style={{ color: accent }} className=' mt-12 md:mt-0 text-xl md:text-4xl lg:text-6xl font-bold'>Unlocking 
        <span style={{color: textColor}}> Africa's</span> 
        <br />Potential Through <br />
        <span style={{color: textColor}}>Financial Inclusion</span></h1>
      
      <section className=' w-full'>
          <section style={{ color: accent }}>
            <p className=' mt-4 md:mt-8 text-xs md:text-sm lg:text-lg'>For: Websites | Apps | Crowdfunding | Market Places | Platforms | Fintechs</p>
          </section>

          <div className=' flex gap-2 mt-8 mb-8'>
              <HeroIcons image={'pointer-icons/pointer-icons-01.png'} />
              <HeroIcons image={'pointer-icons/pointer-icons-02.png'} />
              <HeroIcons image={'pointer-icons/pointer-icons-03.png'} />
              <HeroIcons image={'pointer-icons/pointer-icons-04.png'} />
              <HeroIcons image={'pointer-icons/pointer-icons-05.png'} />
              <HeroIcons image={'pointer-icons/pointer-icons-06.png'} />
          </div>
          
      </section>

    </div>
  )
}

export default HeroHeading
