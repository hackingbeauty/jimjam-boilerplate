import constants from 'core/types'

export function openModal(obj) {
  return {
    type: constants.OPEN_MODAL,
    modalKey: obj.modalKey
  }
}

export function closeModal() {
  return {
    type: constants.CLOSE_MODAL
  }
}
