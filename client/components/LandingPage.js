import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import GridList from '@material-ui/core/GridList'
import ProjectSection from './landingSections/ProjectSection'
import WorkSpaceSection from '../components/landingSections/WorkSpaceSection'
import MiniAboutSection from './landingSections/MinIAboutSection'

const useStyles = makeStyles(() => ({}))

const LandingPage = () => {
  const classes = useStyles()
  return (
    <div
      className="main"
      style={{
        backgroundColor: '#fbecff',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Grid className="workSpaceHolder">
        <WorkSpaceSection />
      </Grid>
      <div className="landingWave" />
      <Grid>
        <MiniAboutSection />
      </Grid>
      <Grid>
        <ProjectSection />
        <div className="upsideDownPurpleWave" />
      </Grid>
      {/*  <div className='upsideDownPurpleWave'/> */}
    </div>
  )
}
export default LandingPage

/* 
import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import GridList from '@material-ui/core/GridList'
import ProjectSection from './landingSections/ProjectSection'
import WorkSpaceSection from '../components/landingSections/WorkSpaceSection'
import MiniAboutSection from './landingSections/MinIAboutSection'

const useStyles = makeStyles(() => ({}))

const LandingPage = () => {
  const classes = useStyles()
  return (
    <div
      className="main"
      style={{
        backgroundColor: '#fbecff',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Grid>
        <WorkSpaceSection />
      </Grid>
      <Grid>
        <MiniAboutSection />
      </Grid>
      <Grid>
        <ProjectSection />
        <div className="upsideDownPurpleWave" />
      </Grid>
      </div>
      )
    }
    export default LandingPage
*/
