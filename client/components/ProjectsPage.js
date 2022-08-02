import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import codeEditorBG from '../../public/images/codeEditorBG.png'
import projectCodeEditor from '../../public/images/projectCodeEditor.png'
import MBSlider from './slider/MBSlider'
import VMSlider from './slider/VMSlider'
import TSlider from './slider/TSlider'
import PSlider from './slider/PSlider'
const ProjectsPage = () => {
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
          /* rowSpacing={1} */
          /* columnSpacing={{xs: 1, sm: 2, md: 3}} */
        >
          <Grid item xs={6} className="projectIntroHeading">
            <Typography
              variant="h3"
              className="projectBigFont"
              /* style={{marginTop: '4em'}} */
            >
              Projects
            </Typography>
            <Typography
              variant="h5"
              className="projectBigFont"
              style={{
                marginTop: '2em',
                marginBottom: '2em',
                marginLeft: '0.3em'
              }}
            >
              Take a look at past projects that have allowed me to sharpen my
              skills as a software engineer
            </Typography>
          </Grid>
          <Grid item xs={6} className="devicesHolder">
            <div className="codeEditorBGHolder">
              <img
                src={codeEditorBG}
                alt="green splash"
                className="codeEditorBG"
              />
            </div>
            <div className="projectCodeEditorHolder">
              <img
                src={projectCodeEditor}
                alt="code editor"
                className="floatingCodeEditor"
              />
            </div>
          </Grid>
        </Grid>
        <div className="projectWave" />
        <Grid
          container
          /* rowSpacing={1} */
          /* columnSpacing={{xs: 1, sm: 2, md: 3}} */
          className="projectPageBox"
          style={{backgroundColor: '#85b1b3'}}
        >
          <Grid item xs={6} className="projectPageImageGrid">
            <MBSlider />
          </Grid>
          <Grid item xs={6} className="projectPageDetails">
            <Grid item alignItems="center" flex-direction="row">
              <Typography className="projectName" variant="body1">
                Moodboard |<Box component="span" className="fullstackTitle1">
                  | Full Stack
                </Box>
              </Typography>
            </Grid>
            <br />
            <Typography className="projectDetail">
              A workspace that allows users to unlesh their creativity by
              creating mood boards. Users can utilize images from their computer
              or Pixabay
            </Typography>
            <br />
            <Typography className="projectDetail">
              Technologies: React, Redux, Fabric.js, Sequelize, Postgres,
              Express.JS, Material-UI
            </Typography>
            <p className="projectButtonHolder">
              <Button
                variant="outlined"
                className="projectPageButton"
                style={{
                  marginTop: '2em',
                  textTransform: 'none',
                  backgroundColor: '#fbecff',
                  borderColor: 'rgb(73 70 78)'
                }}
                href="https://moodboard1.herokuapp.com/"
                target="_blank"
              >
                Website
              </Button>
            </p>
            <p className="projectButtonHolder">
              <Button
                variant="outlined"
                className="projectPageButton"
                style={{
                  marginTop: '2em',
                  textTransform: 'none',
                  backgroundColor: '#fbecff',
                  borderColor: 'rgb(73 70 78)'
                }}
                href="https://github.com/peachyspace/Mood-Board"
                target="_blank"
              >
                GitHub
              </Button>
            </p>
          </Grid>
        </Grid>
        <div className="projectBottomWave" />
        <div className="projectWave" />
        <Grid
          container
          /* rowSpacing={1} */
          /* columnSpacing={{xs: 1, sm: 2, md: 3}} */
          className="projectPageBox"
          style={{backgroundColor: '#85b1b3'}}
        >
          <Grid item xs={6} className="projectPageImageGrid">
            <VMSlider />
          </Grid>
          <Grid item xs={6} className="projectPageDetails">
            <Grid container item alignItems="center" flex-direction="row">
              <Typography className="projectName" variant="body1">
                Vitamon |<Box component="span" className="fullstackTitle2">
                  | Full Stack
                </Box>
              </Typography>
            </Grid>
            <br />
            <Typography className="projectDetail">
              An app that allows users to reach their health goals by assigning
              them a monster that will grow as they reach their goals
            </Typography>
            <br />
            <Typography className="projectDetail">
              Technologies: React Native, Redux, Sequelize, Postgres,
              Express.JS, Expo
            </Typography>
            <br />
            <Typography className="projectDetail">
              Team Members: Priscila Pintado, Melissa Pastore, Veronica Tomchak
              and Daniel Park
            </Typography>
            <p className="projectButtonHolder">
              <Button
                variant="outlined"
                className="projectPageButton"
                style={{
                  marginTop: '2em',
                  textTransform: 'none',
                  backgroundColor: '#fbecff',
                  borderColor: 'rgb(73 70 78)'
                }}
                href="https://github.com/Vitamon-App/vitamon-frontend"
                target="_blank"
              >
                GitHub
              </Button>
            </p>
          </Grid>
        </Grid>
        <div className="projectBottomWave" />

        <div className="projectWave" />
        <Grid
          container
          /* rowSpacing={1} */
          /* columnSpacing={{xs: 1, sm: 2, md: 3}} */
          className="projectPageBox"
          style={{backgroundColor: '#85b1b3'}}
        >
          <Grid item xs={6} className="projectPageImageGrid">
            <TSlider />
          </Grid>
          <Grid item xs={6} className="projectPageDetails">
            <Grid container item alignItems="center">
              <Typography className="projectName" variant="body1">
                Tiger Sugar |<Box component="span" className="fullstackTitle3">
                  | Full Stack
                </Box>
              </Typography>
            </Grid>
            <br />
            <Typography className="projectDetail">
              A fictional ecommerce website that allows fans to buy products
              from their favorite celeberties.
            </Typography>
            <br />
            <Typography className="projectDetail">
              Technologies: React, Redux, Sequelize, Postgres, Express.JS,
              Material-UI
            </Typography>
            <br />
            <Typography className="projectDetail">
              Team Members: Priscila Pintado, Julia Kravets, Lindsey Pak and
              Samantha Shapland
            </Typography>
            <p className="projectButtonHolder">
              <Button
                variant="outlined"
                className="projectPageButton"
                style={{
                  marginTop: '2em',
                  textTransform: 'none',
                  backgroundColor: '#fbecff',
                  borderColor: 'rgb(73 70 78)'
                }}
                href="https://github.com/Team-TigerSugar/tiger-sugar-shop"
                target="_blank"
              >
                GitHub
              </Button>
            </p>
          </Grid>
        </Grid>
        <div className="projectBottomWave" />

        <div className="projectWave" />
        <Grid
          container
          /* rowSpacing={1} */
          /*  columnSpacing={{xs: 1, sm: 2, md: 3}} */
          className="projectPageBox"
          style={{backgroundColor: '#85b1b3'}}
        >
          <Grid item xs={6} className="projectPageImageGrid">
            <PSlider />
          </Grid>
          <Grid item xs={6} className="projectPageDetails">
            <Grid container item alignItems="center">
              <Typography className="projectName" variant="body1">
                Portfolio |<Box component="span" className="fullstackTitle4">
                  | Full Stack
                </Box>
              </Typography>
            </Grid>
            <br />
            <Typography className="projectDetail">
              This website not only showcases my technical projects but also my
              creativity. I love to create and design and I believe that this
              portfolio is a true reflection of that.This is especially true
              when looking ay my landing page where used CSS to bring animation
              to it
            </Typography>
            <br />
            <Typography className="projectDetail">
              Technologies: React, Material-UI, CSS. Git/GitHub
            </Typography>
            <p className="projectButtonHolder">
              <Button
                variant="outlined"
                className="projectPageButton"
                style={{
                  marginTop: '2em',
                  textTransform: 'none',
                  backgroundColor: '#fbecff',
                  borderColor: 'rgb(73 70 78)'
                }}
                href="https://github.com/peachyspace/Priscila-Porfolio-Website"
                target="_blank"
              >
                GitHub
              </Button>
            </p>
          </Grid>
        </Grid>
        <div className="projectBottomWave" />
      </Grid>
    </div>
  )
}
export default ProjectsPage
