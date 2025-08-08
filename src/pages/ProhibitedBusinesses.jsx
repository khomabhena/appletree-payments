import React from 'react'
import { getProhibitedBusinesses } from '../data/prohibited-businesses'
import PolicyContainer from '../components/PolicyContainer'
import PolicyHeading from '../components/PolicyHeading'
import PolicyParagraph from '../components/PolicyParagraph'
import PolicyPoints from '../components/PolicyPoints'

const ProhibitedBusinesses = () => {
    const data = getProhibitedBusinesses

  return (
    <>
      <PolicyContainer title={"Prohibited Businesses"}>
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
    </>
  )
}

export default ProhibitedBusinesses
