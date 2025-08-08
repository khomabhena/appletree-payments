import React, { useEffect } from 'react'
import { getTermsAndConditionsData } from '../data/terms-and-conditions'
import Header from '../sections/Header'
import PolicyContainer from '../components/PolicyContainer'
import Footer from '../sections/Footer'
import PolicyHeading from '../components/PolicyHeading'
import PolicyParagraph from '../components/PolicyParagraph'
import PolicyPoints from '../components/PolicyPoints'

const TermsAndConditions = () => {
  const data = getTermsAndConditionsData

  useEffect(() => {
    document.title = "Terms and Conditions"
  }, [])

    return (
        <>
            <Header prefix='https://appletreepayments.com/' />
            <PolicyContainer title={"Terms and Conditions"}>
                    <h1 className=' text-xl md:text-2xl font-bold'>Terms and Conditions</h1>
                    <h2 className=' text-lg md:text-xl font-medium'>General Conditions of Use for the Payment Services</h2>
                    {
                        data?.map(({ title, titleNumber, paragraphs}) => (
                            <>
                            <PolicyHeading title={title} titleNumber={titleNumber} />
                            {
                                paragraphs?.map(({ paragraph, points }) => (
                                    <>
                                    <PolicyParagraph paragraph={paragraph} />
                                    {
                                        points?.map(({ point }) => (
                                            point != '' && <PolicyPoints point={point} />
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

export default TermsAndConditions
