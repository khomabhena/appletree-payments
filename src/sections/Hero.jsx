import React from 'react'
import HeroHeading from '../components/HeroHeading'

const Hero = () => {
  return (
    <section id='hero' className=' bg-black mt-18 flex flex-wrap justify-between px-8 min-h-[458px] md:min-h-[524px]'>
      <article className=' basis-full md:basis-3/5'>
        <HeroHeading />
      </article>
      <article className=' basis-full dbg-red-600 md:basis-2/5 flex-row bg-contain content-center'>
        <img src="/hero-image.jpg" width={'auto'} height={'auto'} className=' w-auto' alt="Hero Header image" />
      </article>
    </section>
  )
}

export default Hero
