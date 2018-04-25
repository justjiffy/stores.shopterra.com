export const show = 'show'
export const hide = 'hide'

export function loadModal(modal) {
  return {
    type: show,
    modal
  }
}

export function hideModal() {
  return {
    type: hide
  }
}
