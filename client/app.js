import React from 'react'
import {ThemeProvider} from '@material-ui/styles'
import theme from './components/theme'
import {FooterSection, Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <div className="pageContainer">
          <div className="contentWrap">
            <Navbar />
            <Routes />
          </div>
          <FooterSection />
        </div>
      </ThemeProvider>
    </div>
  )
}

export default App
{
  /* <div>
<ThemeProvider theme={theme}>
      <Navbar />
      <Routes />
</ThemeProvider>

</div> */
}
