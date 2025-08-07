import React from 'react'
import { getFooterData } from '../data/footer-data'
import colors from '../data/colors'

const Footer = () => {
    const data = getFooterData

  return (
    <footer className=' bg-black pt-32 min-h-60 w-full max-w-[1920px] text-white'>
        <div className=' w-full flex justify-evenly'>
        {
            data?.map(({title, pages}) => (
                <section>
                    <h6 style={{color: colors.primaryColor}} className=' text-xl'>{title}</h6>
                    <div className=' text-base mt-8'>
                        {
                            pages.map(({title, link}) => (
                                <a href={link}><p className=' mt-1'>{title}</p></a>
                            ))
                        }
                    </div>
                </section>
            ))
        }
        </div>
        <p className=' mt-24 w-full text-center text-sm pb-8'>&copy; Copyright Appletree Payments { new Date().getFullYear() }. <br />All rights reserved</p>
    </footer>
  )
}

export default Footer
