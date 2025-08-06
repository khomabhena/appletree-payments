import React from 'react'
import colors from '../data/colors'
import useCasesData from '../data/use-cases-data'
import UseCasesFields from '../components/UseCasesFields'

const UseCases = () => {
    const primaryColor = colors.primaryColor
    const data = useCasesData

  return (
    <section id='use-cases' className=' bg-black flex flex-col items-center mt-16' style={{ color: primaryColor }}>
      <h2 className=' mt-8 text-xl md:text-2xl lg:text-3xl font-bold'>Payments Use Cases</h2>

      <p style={{ color: 'white' }} className=' mt-2 text-center text-xl md:text-2xl lg:text-3xl font-extralight'>We love what we do, check out some of <br />our use cases</p>

        <article className=' flex flex-wrap justify-center gap-4 mt-12 mb-12'>
            {
                data?.map(({image, title}) => (
                    <UseCasesFields image={image} title={title} />
                ))
            }
        </article>

    </section>
  )
}

export default UseCases
