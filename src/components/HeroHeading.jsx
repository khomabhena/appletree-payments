import React from 'react'
import colors from '../data/colors'
import HeroIcons from './HeroIcons'

const HeroHeading = () => {
    const textColor = colors.primaryColor
    const accent = colors.accentColor

  return (
    <div className=' flex flex-col justify-end h-full'>
      <h1 style={{ color: accent }} className=' mt-12 md:mt-0 text-xl md:text-4xl lg:text-6xl font-bold'>Activating
        <span style={{color: textColor}}> Africa's</span> 
        <br /><p></p><span style={{color: textColor}}>Digital</span>
        <span> Economy</span></h1>
        <section>
            <p className=' text-gray-300 mt-2 mb-12 md:mt-8 text-xs md:text-sm lg:text-xl'>Your gateway to Africa's digital economy, enabling seamless<br />collections and payouts across the continent and beyond</p>
          </section>
      
      <section className=' w-full'>
          <section>
            <p className=' text-gray-400 mt-4 md:mt-8 text-xs md:text-sm lg:text-base'>For: Websites | Apps | Crowdfunding | Marketplaces | Platforms | Fintechs</p>
          </section>

          <div className=' flex gap-4 mt-8 mb-8'>
              <HeroIcons image={'pointer-icons/pointer-icons-01.png'} title={"Signup"} link={""} />
              <HeroIcons image={'pointer-icons/pointer-icons-02.png'} title={"Login"} link={""} />
              <HeroIcons image={'pointer-icons/pointer-icons-03.png'} title={"Sandbox"} link={""} />
              <HeroIcons image={'pointer-icons/pointer-icons-04.png'} title={"Integrate"} link={""} />
              <HeroIcons image={'pointer-icons/pointer-icons-05.png'} title={"Platforms"} link={""} />
              <HeroIcons image={'pointer-icons/pointer-icons-06.png'} title={"Invoice"} link={""} />
          </div>
          
      </section>

    </div>
  )
}

export default HeroHeading
