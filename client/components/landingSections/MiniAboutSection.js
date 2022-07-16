import React from 'react'
import priscilaWhiteBg from '../../../public/images/priscilaWhiteBg.png'
import priscilaHeadlessBody from '../../../public/images/priscilaHeadlessBody.png'
import priscilaHead from '../../../public/images/priscilaHead.png'
import pastelPurpleFlippedWave from '../../../public/images/pastelPurpleFlippedWave.png'
import priscilaLightPurpleBg from '../../../public/images/priscilaLightPurpleBg.png'

import zoomedInHPriscilaHead from '../../../public/images/zoomedInHPriscilaHead.png'
import closeUpPriscilaHead from '../../../public/images/closeUpPriscilaHead.png'
const MiniAboutSection = () => {
  return (
    <div className="miniAboutSectionBg">
      <div className="wave">
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
              I am a software engineer who is focused on creating exceptional
              user experinces. Currently, I am looking for my next adventure. "I
              turn ideas into reality."
            </h3>
          </div>
        </div>
      </div>
      <div className="bottomWave" />
    </div>
  )
}
export default MiniAboutSection
/* import React from 'react'
import priscilaWhiteBg from '../../../public/images/priscilaWhiteBg.png'
import priscilaHeadlessBody from '../../../public/images/priscilaHeadlessBody.png'
import priscilaHead from '../../../public/images/priscilaHead.png'
import pastelPurpleFlippedWave from '../../../public/images/pastelPurpleFlippedWave.png'
import priscilaLightPurpleBg from '../../../public/images/priscilaLightPurpleBg.png'

import zoomedInHPriscilaHead from '../../../public/images/zoomedInHPriscilaHead.png'
import closeUpPriscilaHead from '../../../public/images/closeUpPriscilaHead.png'
const MiniAboutSection = () => {
  return (
    <div className="miniAboutSectionBg">
      <div className="wave"></div>
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
            "I turn ideas into reality."
            </h3>
          </div>
        
      </div>
      <div className="bottomWave" />
    </div>
  )
}
export default MiniAboutSection */
