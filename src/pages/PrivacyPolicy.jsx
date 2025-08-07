import React from 'react'
import PolicyContainer from '../components/PolicyContainer'
import { getPrivacyPolicy } from '../data/privacy-policy'
import PolicyHeading from '../components/PolicyHeading'
import PolicyParagraph from '../components/PolicyParagraph'
import PolicyPoints from '../components/PolicyPoints'

const PrivacyPolicy = () => {
  const data = getPrivacyPolicy
  return (
    <>
      <PolicyContainer title={"Privacy Policy"}>
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
    </>
  )
}

export default PrivacyPolicy
