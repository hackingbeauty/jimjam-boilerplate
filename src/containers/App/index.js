import React, { Component }  from 'react'
import { connect }           from 'react-redux'
import injectTapEventPlugin  from 'react-tap-event-plugin'
import {
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles'


const theme = createMuiTheme()

// global styles for entire app
import './styles.scss'

/* containers */
import Home   from 'containers/Home'
import AppBar from 'components/AppBar'

injectTapEventPlugin()

export class App extends Component {
  constructor(props) {
    super(props)
  }

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

export default connect(null)(App)
