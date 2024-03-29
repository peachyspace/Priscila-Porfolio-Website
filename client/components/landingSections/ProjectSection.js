import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import greenSlantedDesktop from '../../../public/images/greenSlantedDesktop.png'

const ProjectSection = () => {
  const preventDefault = event => {
    event.preventDefault()
  }
  return (
    <Grid className="projectSec">
      <Grid
        container
        /* rowSpacing={1} */
        /* columnSpacing={{xs: 1, sm: 2, md: 3}} */
        className="projectSecBox"
        style={{backgroundColor: '#e5d5ff'}}
      >
        <Grid item xs={6} className="projectSecImageGrid">
          <img src={greenSlantedDesktop} className="laptopProjectImage" />
        </Grid>
        <Grid item xs={6} className="projectDetails">
          <Typography
            className="projectSecFeatTextTitle"
            style={{marginBottom: '2rem'}}
          >
            Featured Project
          </Typography>
          <Typography className="projectSecFeatText">Moodboard</Typography>
          <Typography className="projSecText">
            A workspace that allows users to unlesh their creativity by creating
            mood boards. Users can utilize images from their computer or
            Pixabay.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        className="moreProjectsButtonSection"
        /* rowSpacing={1} */
        style={{backgroundColor: '#e5d5ff'}}
      >
        <Button
          type="button"
          fullWidth={false}
          className="moreProjectsButton"
          style={{
            textTransform: 'none',
            maxWidth: '382px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
          href="/projects"
        >
          View More Projects
        </Button>
      </Grid>
    </Grid>
  )
}
export default ProjectSection
