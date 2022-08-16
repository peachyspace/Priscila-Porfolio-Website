import React from 'react'
import priscilaHeadlessBody from '../../../public/images/priscilaHeadlessBody.png'
import priscilaLightPurpleBg from '../../../public/images/priscilaLightPurpleBg.png'

import zoomedInHPriscilaHead from '../../../public/images/zoomedInHPriscilaHead.png'

const MiniAboutSection = () => {
  return (
    <div className="miniAboutSectionBg">
      {/* <div className="wave"> */}
      <div className="aboutHolder">
        <div className="aboutLeft">
          <img src={priscilaLightPurpleBg} alt="splash purple bg" />

          <div className="bodyHolder">
            <img src={priscilaHeadlessBody} alt="headless body" />
          </div>
          <div className="headHolder">
            <img
              src={zoomedInHPriscilaHead}
              alt="head"
              className="sideToSide"
            />
          </div>
        </div>
        <div className="aboutRight">
          <h1 className="miniIntroHeading">Hi! My name is Priscila</h1>
          <h3 className="miniIntroSubheading">
            I am a software engineer who is focused on creating exceptional user
            experinces. Currently, I am looking for my next adventure.
          </h3>
        </div>
      </div>
      {/* </div> */}
      <div className="bottomWave" />
    </div>
  )
}
export default MiniAboutSection
