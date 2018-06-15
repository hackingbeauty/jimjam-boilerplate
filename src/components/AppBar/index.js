import React, { Component }    from 'react'
import PropTypes               from 'prop-types'
import { AppBar as MuiAppBar } from '@material-ui/core'
import Toolbar                 from '@material-ui/core/Toolbar'
import Typography              from '@material-ui/core/Typography'

/* component styles */
import { styles } from './styles.scss'

export default class AppBar extends Component {
  render() {
    const { children } = this.props
    return (
      <div className={styles}>
         <MuiAppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              {children}
            </Typography>
          </Toolbar>
        </MuiAppBar>
      </div>
    )
  }
}

AppBar.propTypes = {
  children: PropTypes.children
}
