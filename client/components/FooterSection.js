import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import {makeStyles} from '@material-ui/core/styles'
import email_icon from '../../public/images/email_icon.png'
import linkedin_icon from '../../public/images/linkedin_icon.png'
import purprleLinkedinIcon from '../../public/images/purprleLinkedinIcon.png'
import greenMail_Icon from '../../public/images/greenMail_Icon.png'
import darkGreenMail_icon from '../../public/images/darkGreenMail_icon.png'
import lightGreenMail_icon from '../../public/images/lightGreenMail_icon.png'
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
        style={{backgroundColor: '#e5ddff'}}
      >
        <Link
          hover="underline"
          href="/"
          className="footerLink"
          style={{marginRight: '1.3rem'}}
        >
          Home
        </Link>
        <Link
          hover="underline"
          href="/"
          className="footerLink"
          style={{marginRight: '1.3rem'}}
        >
          About
        </Link>
        <Link
          hover="underline"
          className="footerLink"
          style={{marginRight: '1.3rem'}}
          href="/projects"
        >
          Projects
        </Link>
        <Link hover="underline" className="footerLink" href="/">
          Contact
        </Link>
      </Grid>
      <Grid
        item
        xs={6}
        className="footerBox"
        style={{backgroundColor: '#c6cfff'}}
      >
        <Link href="/">
          <img src={darkGreenMail_icon} alt="email icon" />
        </Link>
        <Link href="/">
          <img
            src={purprleLinkedinIcon}
            alt="linkedin icon"
            style={{marginLeft: '2rem'}}
          />
        </Link>
      </Grid>
    </Grid>
  )
}
export default FooterSection
