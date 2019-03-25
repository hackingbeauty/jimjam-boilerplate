import React, { Component } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import {
  HashRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import theme                from 'configs/config-theme'
import AppBar               from 'components/AppBar'
import HomeView             from 'containers/HomeView'
import { appConfig }        from 'configs/config-main'

// global styles for entire app
import './styles.scss'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <HashRouter>
          <div>
            <AppBar>{appConfig.name}</AppBar>
            <div className="app-shell">
              <Switch>
                <Route path="/home" component={HomeView} />
                <Redirect from="/" to="/home" />
              </Switch>
            </div>
          </div>
        </HashRouter>
      </MuiThemeProvider>
    )
  }
}

export default App
