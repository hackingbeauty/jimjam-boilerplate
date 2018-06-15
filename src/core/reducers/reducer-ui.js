import constants from 'core/types'

const initialState = {
  leftNavOpen: false
}

export function uiReducer(state = initialState, action) {
  switch (action.type) {

  case constants.OPEN_NAV:
    return Object.assign({}, state, {
      leftNavOpen: true
    })

  case constants.CLOSE_NAV:
    return Object.assign({}, state, {
      leftNavOpen: false
    })

  default:
    return state;
  }
}
