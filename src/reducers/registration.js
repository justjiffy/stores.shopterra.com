const initialState = {
  action: () => null,
  step1: "inProgress",
  step2: null,
  step3: null,
  scene: "addShop"
}

export default function(state=initialState, action) {
  switch (action.type) {
    case 'progress:step1':
      return {...state, step1:"complete", step2:"inProgress", scene:action.scene}
    case 'progress:step2':
      return {...state, step2:"complete", step3:"inProgress", scene:action.scene}
    case 'progress:step3':
      return {...state, step3:"complete", scene:action.scene}
    default:
      return state
  }
}
