import React                   from 'react'
import { Button as MuiButton } from '@material-ui/core'
import PropTypes               from 'prop-types'

/* component styles */
import { styles } from './styles.scss'

const Button = (props) => {
  const { color, children } = props
  return (
    <div className={styles}>
      <MuiButton variant="contained" color={color}>
        {children}
      </MuiButton>
    </div>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string
}

Button.defaultProps = {
  color: 'primary'
}

export default Button
