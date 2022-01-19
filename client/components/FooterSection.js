import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import {makeStyles} from '@material-ui/core/styles'
import email_icon from '../../public/images/email_icon.png'
import linkedin_icon from '../../public/images/linkedin_icon.png'
const useStyles = makeStyles(() => ({
  link: {
    fontFamily: 'IBM Plex Mono',
    fontWeight: 400,
    fontSize: '1.10em'
  }
}))

const FooterSection = () => {
  let classes = useStyles()
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{xs: 1, sm: 2, md: 3}}
      className="footer"
      style={{backgroundColor: 'pink', textAlign: 'center'}}
    >
      <Grid
        item
        xs={6}
        className="footerBox"
        style={{backgroundColor: '#b6ffd1'}}
      >
        <Link
          hover="underline"
          href="/"
          className={classes.link}
          style={{marginRight: '2em'}}
        >
          home
        </Link>
        <Link
          hover="underline"
          href="/"
          className={classes.link}
          style={{marginRight: '2em'}}
        >
          about
        </Link>
        <Link hover="underline" className={classes.link} href="/">
          contact
        </Link>
      </Grid>
      <Grid
        item
        xs={6}
        className="footerBox"
        style={{backgroundColor: '#f1e9f6'}}
      >
        <Link href="/">
          <img src={email_icon} alt="email icon" />
        </Link>
        <Link href="/">
          <img
            src={linkedin_icon}
            alt="linkedin icon"
            style={{marginLeft: '2em'}}
          />
        </Link>
      </Grid>
    </Grid>
  )
}
export default FooterSection
