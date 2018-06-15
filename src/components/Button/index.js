import React, { Component }    from 'react';
import { Button as MuiButton } from '@material-ui/core'
import PropTypes               from 'prop-types'

/* component styles */
import { styles } from './styles.scss';

export default class Button extends Component {
  render() {
    const { color, children } = this.props
    return (
      <div className={styles}>
        <MuiButton variant="contained" color={color}>
          {children}
        </MuiButton>
      </div>
    )
  }
}

Button.propTypes = {
  children: PropTypes.isRequired
}

Button.defaultProps = {
  color: 'primary'
}
