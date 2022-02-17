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
  const buttonFunction = () => {
    document.getElementById('menu-wrap').classList.toggle('change')
    document.getElementById('menu-bg').classList.toggle('change-bg')
    document.getElementById('menuButton').classList.toggle('change')
  }

  return (
    <div className="navMenuHolder">
      <div className="navMenu">
        {/*     <div className='menuCircle'>
    <input type="checkbox" id="navMenu__checkbox" className="navMenu__checkbox" />
    <label htmlFor="navMenu__checkbox" className="navMenu__toggle">
      <img src={menuIcon} className="lineMenu" alt="menu" />
      <img src={closeIcon} className="closeMenu" />
    </label>
    </div> */}
        <div className="menuBarsHolder">
          <div onClick={buttonFunction} className="menuButton" id="menuButton">
            <span id="bar1" className="bar" />
            <span id="bar2" className="bar" />
            <span id="bar3" className="bar" />
          </div>
        </div>
        <div className="menu-wrap" id="menu-wrap">
          <ul className="navMenu_link-holder">
            <li>
              <a href="/" className="navMenuAnchorText">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="navMenuAnchorText">
                About
              </a>
            </li>
            <li>
              <a href="/projects" className="navMenuAnchorText">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="navMenuAnchorText">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="menu-bg" id="menu-bg" />
      </div>
      {/*   <div className='menu-bg' id='menu-bg'></div> */}
    </div>
  )
}
export default Navbar

/* <div className="nav">
      <div className='menuCircle'>
      <input type="checkbox" id="nav__checkbox" className="nav__checkbox" />
      <label htmlFor="nav__checkbox" className="nav__toggle">
        <img src={menuIcon} className="menu" alt="menu" />
        <img src={closeIcon} className="close" />
      </label>
      </div>
      <div className= 'menu-wrap'>
      <ul className="nav__menu">
        <li>
          <a href="/" className="navAnchorText">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="navAnchorText">
            About
          </a>
        </li>
        <li>
          <a href="/projects" className="navAnchorText">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="navAnchorText">
            Contact
          </a>
        </li>
      </ul>
      </div>
    </div>  */

/* <nav className="nav">
      <input type="checkbox" id="nav__checkbox" className="nav__checkbox" />
      <label htmlFor="nav__checkbox" className="nav__toggle">
        <img src={menuIcon} className="menu" alt="menu" />
        <img src={closeIcon} className="close" />
      </label>
      <ul className="nav__menu">
        <li>
          <a href="/" className="navAnchorText">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="navAnchorText">
            About
          </a>
        </li>
        <li>
          <a href="/projects" className="navAnchorText">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="navAnchorText">
            Contact
          </a>
        </li>
      </ul>
    </nav>  */

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
          <a href="/" className="navAnchorText">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="navAnchorText">
            About
          </a>
        </li>
        <li>
          <a href="/projects" className="navAnchorText">
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
export default Navbar */
