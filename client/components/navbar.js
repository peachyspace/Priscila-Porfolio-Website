import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import logo from '../../public/images/logo.png'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import menuIcon from '../../public/images/menuIcon.png'
import closeIcon from '../../public/images/closeIcon.png'

const Navbar = () => {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <nav className="nav">
      <input type="checkbox" id="nav__checkbox" className="nav__checkbox" />
      <label htmlFor="nav__checkbox" className="nav__toggle">
        <img src={menuIcon} className="menu" alt="menu" />
        <img src={closeIcon} className="close" />
      </label>
      <ul className="nav__menu">
        <li>
          <img src={logo} alt="logo" className="logo" />
        </li>
        <li>
          <a href="#" className="navAnchorText">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="navAnchorText">
            About
          </a>
        </li>
        <li>
          <a href="#" className="navAnchorText">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="navAnchorText">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar

/* import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import logo from '../../public/images/logo.png'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'


const Navbar = () => {

  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <React.Fragment>
      <AppBar color="primary" style={{opacity: '88%'}}>
        <Toolbar>
          <img src={logo} alt="logo" style={{width: '3em', height: '3em'}} />
          <Tabs className="navMenu">
            <Tab
              label="Projects"
              text-transform="none"
              style={{
                textTransform: 'none',
                fontFamily: 'IBM Plex Mono',
                fontSize: '1.5rem',
                padding: '6px 26px',
                opacity: '1'
              }}
            />
            <Tab
              label="About"
              style={{
                textTransform: 'none',
                fontFamily: 'IBM Plex Mono',
                fontSize: '1.5rem',
                padding: '6px 26px',
                opacity: '1'
              }}
            />
            <Tab
              label="Contact"
              style={{
                textTransform: 'none',
                fontFamily: 'IBM Plex Mono',
                fontSize: '1.5rem',
                padding: '6px 26px',
                opacity: '1'
              }}
            />
          </Tabs>

        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
} */
