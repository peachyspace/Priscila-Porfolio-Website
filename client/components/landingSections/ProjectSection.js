import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import moodboardLaptop from '../../../public/images/moodboardLaptop.png'
import tigerSugarLaptop from '../../../public/images/tigerSugarLaptop.png'
import vitamonPhone6 from '../../../public/images/vitamonPhone6.png'
import greenSlantedDesktop from '../../../public/images/greenSlantedDesktop.png'
const ProjectSection = () => {
  const preventDefault = event => {
    event.preventDefault()
  }
  return (
    <Grid className="projectSec">
      <Grid className="projectHeading">
        <Typography
          variant="h1"
          className="landingBigFont"
          style={{
            paddingTop: '12px',
            marginBottom: '20px',
            marginLeft: '0.5em',
            background: 'none'
          }}
        >
          Featured Project
        </Typography>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{xs: 1, sm: 2, md: 3}}
        className="projectSecBox"
        style={{backgroundColor: '#e5d5ff'}}
      >
        <Grid item xs={6} className="projectImageGrid">
          <img src={greenSlantedDesktop} className="laptopProjectImage" />
        </Grid>
        <Grid item xs={6} className="projectDetails">
          <Typography style={{fontSize: 'clamp(14px, 2vw, 29px)'}}>
            Moodboard
          </Typography>
          <Typography
            className="projSecText"
            style={{fontSize: 'clamp(14px, 2vw, 29px)'}}
          >
            A workspace that allows users to unlesh their creativity by creating
            mood boards. Users can utilize images from their computer or Pixabay
          </Typography>
          {/*           <Button
            variant="outlined"
            className="projectButton"
            style={{textTransform: 'none'}}
          >
            Learn More
          </Button> */}
        </Grid>
      </Grid>
      {/* <Grid
        container
        rowSpacing={1}
        columnSpacing={{xs: 1, sm: 2, md: 3}}
        className="projectSecBox"
        style={{backgroundColor: '#f1d4ff'}}
      >
        <Grid
          item
          xs={6}
          className="projectImageGrid"
          style={{paddingRight: '1em'}}
        >
          <img
            src={vitamonPhone6}
            className="phoneProjectImage"
            style={{width: '59%'}}
          />
        </Grid>
        <Grid item xs={6} className="projectDetails">
          <Typography style={{fontSize: 'clamp(14px, 2vw, 29px)'}}>
            Vitamon
          </Typography>
          <Typography
            style={{fontSize: 'clamp(14px, 2vw, 29px)', marginTop: '1em'}}
          >
            A workspace that allows users to unlesh their creativity by creating
            mood boards. Users can utilize images from their computer or Pixabay
          </Typography>
          <Button
            variant="outlined"
            className="projectButton"
            style={{marginTop: '2em', textTransform: 'none'}}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{xs: 1, sm: 2, md: 3}}
        className="projectSecBox"
        style={{backgroundColor: '#affce8'}}
      >
        <Grid item xs={6} className="projectImageGrid">
          <img src={tigerSugarLaptop} className="laptopProjectImage" />
        </Grid>
        <Grid item xs={6} className="projectDetails">
          <Typography style={{fontSize: 'clamp(14px, 2vw, 29px)'}}>
            Tiger Sugar
          </Typography>
          <Typography
            style={{fontSize: 'clamp(14px, 2vw, 29px)', marginTop: '1em'}}
          >
            A ecomerce space that allows users to unlesh their creativity by
            creating mood boards. Users can utilize images from their computer
            or Pixabay
          </Typography>
          <Button
            variant="outlined"
            className="projectButton"
            style={{marginTop: '2em', textTransform: 'none'}}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>*/}
      <Grid
        container
        className="moreProjectsButtonSection"
        rowSpacing={1}
        style={{backgroundColor: '#e5d5ff'}}
      >
        <Button
          variant="text"
          className="moreProjectsButton"
          style={{
            textTransform: 'none'
          }}
        >
          View More Projects
        </Button>
      </Grid>
    </Grid>
  )
}
export default ProjectSection
