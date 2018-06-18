import constants from 'core/types'

const initialState = {
  modalState: {
    openModal: false,
    modalKey: ''
  }
}

export function uiReducer(state = initialState, action) {
  switch (action.type) {

  case constants.OPEN_MODAL:
    return Object.assign({}, state, {
      modalState: {
        openModal: true,
        modalKey: action.modalKey
      }
    })

  case constants.CLOSE_MODAL:
    return Object.assign({}, state, {
      modalState: {
        openModal: false,
        modalKey: ''
      }
    })

  default:
    return state
  }
}
