// api.js provides shared storage for the result of http calls
// it is used by actions/request.js and won't be dispatched to directly
// but it will be read from.
//
// an example shape of the store is:
//
// {
//   // the key users.login is supplied by the caller of `request`
//   // this api call is loading and has no successful responses or errors
//   'users.login': {
//     loading: true,
//   },
//
//
//   // this api call has loaded and returned a successful response.
//   'vendor.load': {
//     loading: false,
//     body: {
//       id: 'abc123',
//       name: "VeggieScrubbers",
//       //...
//     }
//     time: 1520478331964
//   }
//
//   // this api call has failed.
//   'products.create': {
//     loading: true,
//     body: null,
//     error: {
//       message: 'InputError: missing title',
//       statusCode: 400
//     }
//   }
// }

const initialState = {}
export default function(state=initialState, action) {
  const time = +new Date()
  switch(action.type) {
    case 'api:loading':
      return {
        ...state,
        [action.key]: {
          ...state[action.key],
          loading: true,
        }
      }
    case 'api:yes':
      return {
        ...state,
        [action.key]: {
          ...state[action.key],
          loading: false,
          error: null,
          body: action.payload,
          time,
        }
      }
    case 'api:no':
      return {
        ...state,
        [action.key]: {
          ...state[action.key],
          loading: false,
          body: null,
          error: action.error,
          time,
          errors: [{
            error: action.error,
            time,
          }].concat((state[action.key] || {}).errors || []).slice(0, 2),
        }
      }

    case 'api:destroy':
      return initialState
    case 'persist/REHYDRATE':
      const incoming = action.payload && action.payload.api
      if( !incoming ) { return initialState }
      const payload = {}
      for( var key in incoming ) {
        payload[key] = {
          ...incoming[key],
          loading: null,
        }
      }
      return payload
    default:
      return state
  }
}
