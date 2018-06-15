import constants from 'core/types'

export function openNav() {
  return {
    type: constants.OPEN_NAV
  }
}

export function closeNav() {
  return {
    type: constants.CLOSE_NAV
  }
}
