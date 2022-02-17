import {createTheme} from '@material-ui/core/styles'

const colorOne = '#ffffff'
const colorTwo = '#d4c0ab'
const colorThree = '#EFE9E4'
const colorFour = '#f2e5d7'
const colorFive = '#F6F2EC'
const colorWhite = '#F1EBE0'

export default createTheme({
  palette: {
    common: {
      colorOne: colorOne,
      colorTwo: colorTwo,
      colorThree: colorThree,
      colorFour: colorFour,
      colorFive: colorFive,
      colorWhite: colorWhite
    },
    primary: {
      main: colorOne
    },
    secondary: {
      main: colorWhite
    }
  },
  typography: {
    root: {
      margin: '1px, 1px, 1px, 1px'
    },
    h1: {
      fontSize: '2.5rem',
      fontWeight: 400,
      fontFamily: 'IBM Plex Mono',
      letterSpacing: 5,
      color: '#49464e'
    },
    h2: {
      fontSize: '3.4rem',
      fontWeight: 400,
      fontFamily: 'IBM Plex Mono',
      letterSpacing: 5
    },
    h3: {
      fontSize: '2.8rem',
      fontWeight: 400,
      fontFamily: 'IBM Plex Mono',
      letterSpacing: 5
    },
    h4: {
      fontSize: '2.1rem',
      fontWeight: 300,
      fontFamily: 'IBM Plex Mono',
      letterSpacing: 2
    },
    h5: {
      fontSize: '1.2rem',
      fontWeight: 300,
      fontFamily: 'IBM Plex Mono',
      letterSpacing: 2
    },
    h6: {
      fontSize: '0.8rem',
      fontWeight: 400,
      fontFamily: 'IBM Plex Mono',
      letterSpacing: 5
    },
    tab: {
      fontSize: '1.9em',
      fontWeight: 400,
      fontFamily: 'IBM Plex Mono',
      letterSpacing: 2
    },
    body1: {
      fontSize: '1.25em',
      fontWeight: 400,
      fontFamily: 'IBM Plex Mono',
      letterSpacing: 2,
      color: '#49464e'
    },
    body2: {
      fontSize: '1.25em',
      fontWeight: 300,
      fontFamily: 'IBM Plex Mono',
      letterSpacing: 2
    }
  },
  breakpoints: {
    values: {
      ml: 1720
    }
  }
})
