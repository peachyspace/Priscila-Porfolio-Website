import React, {useRef} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import GridList from '@material-ui/core/GridList'
import ProjectSection from './landingSections/ProjectSection'
import largePrism from '../../public/images/largePrism.jpg'

const useStyles = makeStyles(() => ({}))

const LandingPage = () => {
  const classes = useStyles()
  return (
    <div
      className="main"
      style={{
        backgroundImage: `url(${largePrism})`,
        // height: '200em',
        paddingBottom: '2em',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Grid container className="miniIntroSection">
        <Grid
          item
          style={{
            marginTop: '10em',
            marginLeft: '2em'
          }}
        >
          <Typography
            variant="h4"
            className="landingSmallFont"
            style={{
              marginTop: '1em'
              // fontSize: 'clamp(14px, 2vw, 29px)',
              // fontSize: '2em'
            }}
          >
            Hello there, my name is <br />
          </Typography>
        </Grid>
        <Grid
          item
          style={{
            marginTop: '1em',
            marginLeft: '2em'
          }}
        >
          <Typography
            variant="h1"
            className="landingBigFont"
            style={{width: 'max-content'}}
            // style={{
            //   fontSize: 'clamp(40px, 8vw, 80px)',
            //   backgroundImage:"linear-gradient(transparent 0%, transparent calc(70% - 9px), rgba(0, 255, 0, 0.35) calc(70% - 9px), rgba(0, 255, 0, 0.35) 100%)",
            //   backgroundSize: "100% 80% ",
            //   width: 'max-content'
            // }}
          >
            Priscila Pintado. <br />
          </Typography>
        </Grid>
        <Grid
          item
          style={{
            marginTop: '1em',
            marginLeft: '2em'
          }}
        >
          <Typography
            variant="h1"
            className="landingBigFont"
            style={{
              backgroundImage: 'none',
              fontWeight: '300'
            }}
          >
            I turn ideas into reality. <br />
          </Typography>
        </Grid>
        <Grid
          item
          style={{
            marginTop: '1em',
            marginLeft: '2em'
          }}
        >
          <Typography
            variant="h4"
            className="landingSmallFont"
            // style={{

            //   maxWidth: '560px'
            // }}
          >
            I am a software engineer who is focused on creating exceptional user
            experinces. Currently, I am looking for my next adventure.
          </Typography>
        </Grid>
      </Grid>
      <Grid>
        <ProjectSection />
      </Grid>
    </div>
  )
}
export default LandingPage
