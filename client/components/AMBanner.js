import React from 'react'
import priscilaLightPurpleBg from '../../public/images/priscilaLightPurpleBg.png'
import priscilaWebPic from '../../public/images/priscilaWebPic.png'
import aboutSplash from '../../public/images/aboutSplash.png'
import leftGreenLeaves from '../../public/images/leftGreenLeaves.png'
import rightGreenLeaves from '../../public/images/rightGreenLeaves.png'

const AMBanner = ({}) => {
  return (
    <div className="amBannerSection">
      <img src={aboutSplash} />
      <div className="PrisPhotoHolder">
        <img src={priscilaWebPic} />
      </div>
      <div className="leftLeaveHolder">
        <img src={leftGreenLeaves} />
      </div>
      <div className="rightLeaveHolder">
        <img src={rightGreenLeaves} />
      </div>
    </div>
  )
}
export default AMBanner
