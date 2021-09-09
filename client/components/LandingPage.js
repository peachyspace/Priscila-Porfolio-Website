import React, {useRef} from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import GridList from '@material-ui/core/GridList'
import forest from '../../public/images/forest.jpg'

const LandingPage = () => {
  let line1Ref = useRef(null)
  let line2Ref = useRef(null)
  window.onscroll = () => {
    //minus 800px bc we want the text to be outside the screen
    let pos = window.scrollY
    //console.log(pos)
    //console.log(line1Ref.current.style.left)
    line1Ref.current.style.left = `${pos}px`
    line2Ref.current.style.right = `${pos}px`
  }
  return (
    <div className="landingBackground">
      <Typography
        variant="h1"
        component="h1"
        className="line-1"
        ref={line1Ref}
        style={{marginTop: '0.5em'}}
      >
        Your Entering{' '}
      </Typography>
      <Typography
        variant="h1"
        className="line-2"
        ref={line2Ref}
        style={{marginTop: '1.5em'}}
      >
        {' '}
        Priscila's Space
      </Typography>
      <Grid container justifyContent="center">
        <img src={forest} style={{marginTop: '4em'}} />
      </Grid>

      <Typography variant="h3" style={{marginTop: '40em'}}>
        Software Engineer who has fullstack development experince but has a bias
        towards frontend development
      </Typography>
      <Typography variant="h3" style={{marginTop: '40em'}}>
        Location: New York City{' '}
      </Typography>
    </div>
  )
}
export default LandingPage
