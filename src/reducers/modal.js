const initialState = {
  action: () => null,
  show: false,
  scene: null
}

export default function(state=initialState, action) {
  switch (action.type) {
    case 'modal:show':
      return {...state, show:true, scene: action.scene}
    case 'modal:hide':
      return initialState
    default:
      return state
  }
}
