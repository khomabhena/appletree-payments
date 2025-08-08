import React from 'react'
import { getProhibitedBusinesses } from '../data/prohibited-businesses'
import PolicyContainer from '../components/PolicyContainer'
import PolicyHeading from '../components/PolicyHeading'
import PolicyParagraph from '../components/PolicyParagraph'
import PolicyPoints from '../components/PolicyPoints'
import Header from '../sections/Header'
import Footer from '../sections/Footer'

const ProhibitedBusinesses = () => {
    const data = getProhibitedBusinesses

  return (
    <>
      <Header prefix='https://appletreepayments.com/' />
      <PolicyContainer title={"Prohibited Businesses"}>
        <h1 className=' text-xl md:text-2xl font-bold'>Prohibited Businesses</h1>
        {
            data?.map(({ title, titleNumber, paragraphs}) => (
                <>
                <PolicyHeading title={title} titleNumber={titleNumber} />
                {
                    paragraphs?.map(({ paragraphs, points }) => (
                        <>
                        <PolicyParagraph paragraph={paragraphs} />
                        {
                            points?.map(({ point }) => (
                                <PolicyPoints point={point} />
                            ))
                        }
                        </>
                    ))
                }
                </>
            ))
        }
      </PolicyContainer>
      <Footer />
    </>
  )
}

export default ProhibitedBusinesses
