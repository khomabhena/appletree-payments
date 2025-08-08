import React, { useEffect } from 'react'
import PolicyContainer from '../components/PolicyContainer'
import { getPrivacyPolicy } from '../data/privacy-policy'
import PolicyHeading from '../components/PolicyHeading'
import PolicyParagraph from '../components/PolicyParagraph'
import PolicyPoints from '../components/PolicyPoints'
import Header from '../sections/Header'
import Footer from '../sections/Footer'

const PrivacyPolicy = () => {
  const data = getPrivacyPolicy

  useEffect(() => {
    document.title = 'Privacy Policy'
  }, [])

  return (
    <>
      <Header prefix='https://appletreepayments.com/' />
      <PolicyContainer title={"Privacy Policy"}>
        <h1 className=' text-xl md:text-2xl font-bold'>Privacy Policy</h1>
        {
          data?.map(({title, titleNumber, paragraphs}) => (
            <>
            <PolicyHeading title={title} titleNumber={titleNumber} />
            {
              paragraphs?.map(({ paragraph, points }) => (
                <>
                <PolicyParagraph paragraph={paragraph} />
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

export default PrivacyPolicy
