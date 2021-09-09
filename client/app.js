import React from 'react'
import {ThemeProvider} from '@material-ui/styles'
import theme from './components/theme'
import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes />
      </ThemeProvider>
    </div>
  )
}

export default App
