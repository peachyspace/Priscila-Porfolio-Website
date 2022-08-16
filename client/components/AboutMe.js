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
            Hello, my name is Priscila Pintado and I am a Software Engineer
            based in NYC.
          </Typography>
          <br />
          <Typography className="aboutBodyText">
            One important thing about me is that I love to create. During my
            childhood, I believed that creativity could only be used in order
            make in art. This is the main reason why I love to draw and paint.
            However in my adulthood, I realized that creativity was needed when
            solving problems which is what led me to pursue a job in teaching.
          </Typography>
          <br />
          <Typography className="aboutBodyText">
            In the spring of 2020 I was accepted to the The New York City
            Teaching Fellows program. I was excited to help students navigate
            through their journey by helping them tackle obstacles that are
            inside or outside the classroom. My excitement vanished when the
            program was cancelled due the pandemic. During that same time my dad
            was hospitalized due COVID-19. My dad stayed in the hospital for 3
            months and seeing my dad's resiliency in his battle with COVID-19
            showed me that I need to be resilient in order to achieve my goals.
          </Typography>
          <br />
          <Typography className="aboutBodyText">
            As I helped my dad in his recovery I started to learn about about
            web development. I quickly saw how creativity was needed in this
            field which made me fall in love with it. Being a caretaker and
            being a student was difficult but staying resilient helped me push
            through the challenges. I was fortunate to find out about Fullstack
            Academy's Web Development Fellowship scholarship program. Thankfully
            I was accepted to the program because I was placed in stimulating
            environment where I could learn not only from my instructors but
            also my peers. I am now looking utilize the skills I have learned
            during my time at Fullstack at a company where I can be a Frontend
            or Full Stack engineer.
          </Typography>
        </Grid>
      </Grid>
      <div className="upsideDownPurpleWave" style={{marginBottom: '7.4rem'}} />
    </div>
  )
}
export default AboutMe
