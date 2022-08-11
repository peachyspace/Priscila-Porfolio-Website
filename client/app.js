import React from 'react'
import {ThemeProvider} from '@material-ui/styles'
import {BrowserRouter} from 'react-router-dom'
import theme from './components/theme'
import {FooterSection, Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <div className="pageContainer">
          <div className="contentWrap">
            <BrowserRouter>
              <Navbar />
              <Routes />
            </BrowserRouter>
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
