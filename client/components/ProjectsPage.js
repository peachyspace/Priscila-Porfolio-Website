import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import moodboardLaptop from '../../public/images/moodboardLaptop.png'
import tigerSugarLaptop from '../../public/images/tigerSugarLaptop.png'
import vitamonPhone6 from '../../public/images/vitamonPhone6.png'
import moodboardTextChangePic from '../../public/images/moodboardTextChangePic.png'
import Lottie from 'react-lottie'
import devicesData from '../../public/lottieFiles/devices.json'
import greenLaptop from '../../public/images/greenLaptop.png'
import bigGreenBall from '../../public/images/bigGreenBall.png'
import yellowCylinder from '../../public/images/yellowCylinder.png'
import lightPinkSmallBall from '../../public/images/lightPinkSmallBall.png'
import pinkCylinder from '../../public/images/pinkCylinder.png'
import skyBlueCircle from '../../public/images/skyBlueCircle.png'
import websiteBoxes from '../../public/images/websiteBoxes.png'
import phone from '../../public/images/phone.png'
const ProjectsPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: devicesData,
    renderSettings: {}
  }
  return (
    <div
      className="projectPage"
      style={{
        backgroundColor: '#fbecff',
        paddingBottom: '2em',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Grid container className="projectPageSection">
        <Grid
          className="projectHeader"
          container
          rowSpacing={1}
          columnSpacing={{xs: 1, sm: 2, md: 3}}
        >
          <Grid item xs={6} className="projectIntroHeading">
            <Typography
              variant="h3"
              className="projectBigFont"
              style={{marginTop: '2em'}}
            >
              Projects
            </Typography>
            <Typography variant="h5" className="projectIntroSmallFont">
              Take a look at my projects. Each project has allowed to utilize my
              logical and creative side.
            </Typography>
          </Grid>
          <Grid item xs={6} className="devicesHolder">
            {/*             <Lottie options={defaultOptions} height={300} width={300} /> */}
            <div className="laptopHolder">
              <img src={greenLaptop} alt="laptop" />
            </div>
            <div className="bigBallHolder">
              <img src={bigGreenBall} alt="green big ball" />
            </div>
            <div className="yellowCylinderHolder">
              <img src={yellowCylinder} alt="yellow cylinder" />
            </div>
            <div className="lightPinkSmallHolder">
              <img src={lightPinkSmallBall} alt="light pink small ball" />
            </div>
            <div className="pinkCylinderHolder">
              <img src={pinkCylinder} alt="pink cylinder" />
            </div>
            <div className="skyBlueCircleHolder">
              <img src={skyBlueCircle} alt="sky blue circle" />
            </div>
            <div className="websiteBoxesHolder">
              <img src={websiteBoxes} alt="website boxes" />
            </div>
            <div className="phoneHolder">
              <img src={phone} alt="phone" />
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{xs: 1, sm: 2, md: 3}}
          className="projectPageBox"
          style={{backgroundColor: '#f3fdb4'}}
        >
          <Grid item xs={6} className="projectPageImageGrid">
            <img src={moodboardTextChangePic} className="projectPageImage" />
          </Grid>
          <Grid item xs={6} className="projectPageDetails">
            <Typography className="projectName" style={{fontSize: '1.2rem'}}>
              Moodboard
            </Typography>
            <Typography className="projectDetail" style={{fontSize: '0.9rem'}}>
              A workspace that allows users to unlesh their creativity by
              creating mood boards. Users can utilize images from their computer
              or Pixabay
            </Typography>
            <p className="projectButtonHolder">
              <Button
                variant="outlined"
                className="projectPageButton"
                style={{marginTop: '2em', textTransform: 'none'}}
              >
                View Details
              </Button>
            </p>
          </Grid>
        </Grid>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{xs: 1, sm: 2, md: 3}}
          className="projectPageBox"
          style={{backgroundColor: '#f1d4ff'}}
        >
          <Grid item xs={6} className="projectPageImageGrid">
            <img src={moodboardTextChangePic} className="projectPageImage" />
          </Grid>
          <Grid item xs={6} className="projectPageDetails">
            <Typography className="projectName" style={{fontSize: '1.2rem'}}>
              Vitamon
            </Typography>
            <Typography className="projectDetail" style={{fontSize: '0.9rem'}}>
              An app that allows users to reach their health goals by assigning
              them a monster that will grow as they reach their goals
            </Typography>
            <p className="projectButtonHolder">
              <Button
                variant="outlined"
                className="projectPageButton"
                style={{marginTop: '2em', textTransform: 'none'}}
              >
                View Details
              </Button>
            </p>
          </Grid>
        </Grid>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{xs: 1, sm: 2, md: 3}}
          className="projectPageBox"
          style={{backgroundColor: '#affce8'}}
        >
          <Grid item xs={6} className="projectPageImageGrid">
            <img src={moodboardTextChangePic} className="projectPageImage" />
          </Grid>
          <Grid item xs={6} className="projectPageDetails">
            <Typography className="projectName" style={{fontSize: '1.2rem'}}>
              Tiger Sugar
            </Typography>
            <Typography className="projectDetail" style={{fontSize: '0.9rem'}}>
              A fictional ecommerce that allow fans of celeberties to buy
              products from their favorite celeberties.
            </Typography>
            <p className="projectButtonHolder">
              <Button
                variant="outlined"
                className="projectPageButton"
                style={{marginTop: '2em', textTransform: 'none'}}
              >
                View Details
              </Button>
            </p>
          </Grid>
        </Grid>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{xs: 1, sm: 2, md: 3}}
          className="projectPageBox"
          style={{backgroundColor: '#fbdfee'}}
        >
          <Grid item xs={6} className="projectPageImageGrid">
            <img src={moodboardTextChangePic} className="projectPageImage" />
          </Grid>
          <Grid item xs={6} className="projectPageDetails">
            <Typography className="projectName" style={{fontSize: '1.2rem'}}>
              Portfolio
            </Typography>
            <Typography className="projectDetail" style={{fontSize: '0.9rem'}}>
              A website that showcases not only projects but also my creativity.
            </Typography>
            <p className="projectButtonHolder">
              <Button
                variant="outlined"
                className="projectPageButton"
                style={{marginTop: '2em', textTransform: 'none'}}
              >
                View Details
              </Button>
            </p>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
export default ProjectsPage
