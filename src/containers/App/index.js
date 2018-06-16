import React, { Component }  from 'react'
import injectTapEventPlugin  from 'react-tap-event-plugin'
import {
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles'

/* containers */
import Home   from 'containers/Home'
import AppBar from 'components/AppBar'

// global styles for entire app
import './styles.scss'

const theme = createMuiTheme()

injectTapEventPlugin()

// eslint-disable-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <AppBar />
          <Home />
        </div>
      </MuiThemeProvider>
    )
  }
}
