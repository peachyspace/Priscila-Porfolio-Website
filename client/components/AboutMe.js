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
            One important thing you should know about me is that I love to
            create. During my childhood, I believed that creativity could only
            be used in order to make art. However in my adulthood, I realized
            that creativity was needed when solving problems which is what led
            me to pursue a job in teaching.
          </Typography>
          <br />
          <Typography className="aboutBodyText">
            In the spring of 2020 I was accepted to the New York City Teaching
            Fellows program. I was excited to help students navigate through
            their journey by helping them tackle obstacles inside or outside the
            classroom. My excitement vanished when the program was cancelled due
            the pandemic. During that time my dad was hospitalized due to
            COVID-19. Seeing my dad's resiliency in his 3 month battle with
            COVID-19 showed me that I needed to be resilient in order to achieve
            my goals.
          </Typography>
          <br />
          <Typography className="aboutBodyText">
            As I helped my dad in his recovery I started to learn about web
            development. I quickly saw how creativity was needed in this field
            and I instantly fell in love with it. Being both a caretaker and a
            student was difficult but staying resilient helped me push through
            any challenges that I came across. I was fortunate to find out about
            Fullstack Academy's Web Development Fellowship scholarship program.
            Thankfully I was accepted to the program and I was placed in a
            stimulating environment where I could learn not only from my
            instructors but also my peers. I am now looking to utilize the
            skills that I gained from the fellowship program at a company where
            I can be a Frontend or Full Stack engineer.
          </Typography>
        </Grid>
      </Grid>
      <div className="upsideDownPurpleWave" style={{marginBottom: '7.4rem'}} />
    </div>
  )
}
export default AboutMe
