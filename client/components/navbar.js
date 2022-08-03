import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
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
              <a href="/about" className="navMenuAnchorText">
                About
              </a>
            </li>
            <li>
              <a href="/projects" className="navMenuAnchorText">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="navMenuAnchorText">
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
