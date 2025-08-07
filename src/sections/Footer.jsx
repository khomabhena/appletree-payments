import React from 'react'
import { getFooterData } from '../data/footer-data'
import colors from '../data/colors'

const Footer = () => {
    const data = getFooterData

  return (
    <footer className=' bg-black pt-24 max-w-[1920px] text-white px-4 lg:px-24 '>
        <div className=' w-full flex flex-wrap md:flex-nowrap gap-8 justify-evenly'>
        {
            data?.map(({title, pages}) => (
                <section className=' bg-red-600f basis-full md:basis-auto '>
                    <h6 style={{color: colors.primaryColor}} className=' text-xl'>{title}</h6>
                    <div className=' text-base mt-2 md:mt-4'>
                        {
                            pages.map(({title, link}) => (
                                <a href={link} target='_blank'><p className=' mt-1'>{title}</p></a>
                            ))
                        }
                    </div>
                </section>
            ))
        }
        </div>
        <p className=' mt-24 w-full text-center text-sm pb-8'>&copy; Copyright Appletree Payments { new Date().getFullYear() }. All rights reserved</p>
    </footer>
  )
}

export default Footer
