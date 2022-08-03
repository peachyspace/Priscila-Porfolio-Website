import React from 'react'
import AMBanner from './AMBanner'
import Grid from '@material-ui/core/Grid'
import {Typography} from '@material-ui/core'
const AboutMe = ({}) => {
  return (
    <div className="main" style={{backgroundColor: '#fbecff'}}>
      <div className="BannerHolder">
        <AMBanner />
      </div>
      <div className="pastelPurpleFlippedWave" />
      <Grid
        container
        className="aboutMePageBox"
        style={{backgroundColor: '#e5d5ff'}}
      >
        <Grid className="aboutMeTextHolder" flex-direction="column">
          <Typography className="aboutTitle">About Me</Typography>

          <br />
          <Typography className="aboutBodyText">
            Hi reader, my name is Priscila Pintado and I am a Software Engineer
            bassed in NYC.
          </Typography>
          <br />
          <Typography className="aboutBodyText">
            One important thing about me is that I love to create. Creativity
            can manifest in many different areas. During my childhood, I belived
            that creativity could only be found in art. This is the main reason
            why love to draw and paint. However in my adulthood, I realized that
            creativity could also mainfest in problem solving.
          </Typography>
        </Grid>
      </Grid>
      <div className="upsideDownPurpleWave" style={{marginBottom: '7.4rem'}} />
    </div>
  )
}
export default AboutMe
