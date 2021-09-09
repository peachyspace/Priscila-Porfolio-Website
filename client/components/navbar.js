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
import {logout} from '../store'

const Navbar = () => {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <React.Fragment>
      <AppBar color="transparent">
        <Toolbar>
          <img src={logo} alt="logo" style={{width: '3em', height: '3em'}} />
          <Tabs className="navMenu">
            <Tab
              label="Projects"
              text-transform="none"
              style={{
                textTransform: 'none',
                fontFamily: 'Italiana, serif',
                fontSize: '1.9rem',
                padding: '6px 26px'
              }}
            />
            <Tab
              label="About"
              style={{
                textTransform: 'none',
                fontFamily: 'Italiana, serif',
                fontSize: '1.9rem',
                padding: '6px 26px'
              }}
            />
            <Tab
              label="Contact"
              style={{
                textTransform: 'none',
                fontFamily: 'Italiana, serif',
                fontSize: '1.9rem',
                padding: '6px 26px'
              }}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}
export default Navbar
/**
 * PROP TYPES
 */
// Navbar.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }

// const Navbar = ({handleClick, isLoggedIn}) => (
//   <div>
//     <h1>navbar</h1>
//     <nav>
//       {isLoggedIn ? (
//         <div>

//           <Link to="/home">Home</Link>
//           <a href="#" onClick={handleClick}>
//             Logout
//           </a>
//         </div>
//       ) : (
//         <div>

//           <Link to="/login">Login</Link>
//           <Link to="/signup">Sign Up</Link>
//         </div>
//       )}
//     </nav>
//     <hr />
//   </div>
// )

// const mapState = state => {
//   return {
//     isLoggedIn: !!state.user.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     handleClick() {
//       dispatch(logout())
//     }
//   }
// }

// export default connect(mapState, mapDispatch)(Navbar)

// Navbar.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
