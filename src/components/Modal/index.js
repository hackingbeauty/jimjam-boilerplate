import React, { Component }   from 'react'
import PropTypes              from 'prop-types'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { Dialog }             from '@material-ui/core'

/* actions */
import * as uiActionCreators  from 'core/actions/actions-ui'

/* component styles */
import { styles } from './styles.scss'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  componentWillReceiveProps(nextProps) {
    const modalInstance = nextProps.modalState

    if (modalInstance && (modalInstance.modalKey === this.props.modalKey)) {
      this.setState({
        open: modalInstance.showModal
      })
    }
  }

  render() {
    const { title, children, className, cssModule } = this.props
    const mergedStyles = styles + ' ' + cssModule

    return (
      <div>
        <Dialog
          title={title}
          className={className}
          modal={false}
          open={this.state.open}
          children={<div className={mergedStyles}>{children}</div>}
          onRequestClose={this.handleClose} />
      </div>
    )
  }

  handleClose=() => {
    const { actions, modalKey } = this.props
    this.setState({ open: false })
    actions.ui.closeModal({modalKey})
  }

}

Modal.propTypes = {
  actions: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  cssModule: PropTypes.string,
  modalKey: PropTypes.string.isRequired,
  modalState: PropTypes.object.isRequired,
  title: PropTypes.string
}

Modal.defaultProps = {
  open: false
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ui: bindActionCreators(uiActionCreators, dispatch)
    }
  }
}

export default connect(null, mapDispatchToProps)(Modal)
