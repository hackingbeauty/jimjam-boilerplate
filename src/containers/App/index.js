import React, { Component }  from 'react'
import injectTapEventPlugin  from 'react-tap-event-plugin'
import {
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles'

/* containers */
import AppBar from 'components/AppBar'
import Home   from 'containers/Home'

// global styles for entire app
import './styles.scss'

const theme = createMuiTheme()

injectTapEventPlugin()

// eslint-disable-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <AppBar>Your React App</AppBar>
          <Home />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
