import React from 'react'
import InfoBox from './InfoBox'

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <InfoBox
                heading="Property Management 'For Renters' Training"
                backgroundColor="bg-grey-400"
                buttonInfo={{
                    text: 'Browse Properties',
                    link: '/properties',
                    backgroundColor: 'bg-black'
                }}>
                Learn the ins and outs of property management with our comprehensive training program. Gain valuable insights, tips, and strategies to excel in the property management industry.
            </InfoBox>
            <InfoBox
                heading="Property Management 'For Property Owners' Training"
                backgroundColor="bg-blue-400"
                buttonInfo={{
                    text: 'Add Property',
                    link: '/properties/add',
                    backgroundColor: 'bg-blue-800'
                }}>
                Our training program provides valuable insights, tips, and strategies to help you navigate the property management industry with confidence.
            </InfoBox>
          </div>
        </div>
    </section>
  )
}

export default InfoBoxes
