import {createTheme} from '@material-ui/core/styles'

const colorOne = '#C3A789'
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
    h1: {
      fontSize: '3.8rem',
      fontWeight: 600,
      fontFamily: ['Italiana, serif'].join(','),
      letterSpacing: 5
    },
    h3: {
      fontSize: '2.8rem',
      fontWeight: 500,
      fontFamily: ['Italiana, serif'].join(','),
      letterSpacing: 5
    },
    h4: {
      fontSize: '1.71rem',
      fontWeight: 400,
      fontFamily: ['Italiana, serif'].join(','),
      letterSpacing: 2
    },
    h5: {
      fontSize: '1.2rem',
      fontWeight: 400,
      fontFamily: ['Italiana, serif'].join(','),
      letterSpacing: 5
    },
    h6: {
      fontSize: '0.8rem',
      fontWeight: 400,
      fontFamily: ['Josefin Slab, serif'].join(','),
      letterSpacing: 5
    },
    tab: {
      fontSize: '1em',
      fontWeight: 400,
      fontFamily: ['Italiana, serif'].join(','),
      letterSpacing: 2
    },
    body1: {
      fontSize: '1.25em',
      fontWeight: 500,
      fontFamily: ['Italiana, serif'].join(','),
      letterSpacing: 2
    },
    body2: {
      fontSize: '1.25em',
      fontWeight: 300,
      fontFamily: ['Italiana, serif'].join(','),
      letterSpacing: 2
    }
  },
  breakpoints: {
    values: {
      ml: 1720
    }
  }
})
