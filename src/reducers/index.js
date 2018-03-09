import logger           from 'redux-logger'
import thunk            from 'redux-thunk'
import storage          from 'redux-persist/es/storage'
import {
  persistCombineReducers,
  persistStore } from 'redux-persist'
import {
  applyMiddleware,
  createStore,
  compose,
} from 'redux'

// Import all reducers here. Wish we could do this automatically for every other
// file in the directory, but I can't figure out a way to get that to work with import
import api       from './api'

// Allow support of actions with asynchronous results in the future
const middleware = [thunk]

// In dev, open js console to see all state changes
if( window.location.hostname === 'localhost' ) {
  middleware.push(logger)
}

// Configure redux-persist
const config = {
  key: 'root',
  storage,
  whitelist: [
    // any reducers named here will have their states persisted to disk
    // caution: storing large state trees affects performance significantly!
    'api',
  ]
}

// redux-persist makes you use this instead of vanilla combineReducers :/
const reducers = persistCombineReducers(config, {
  api,
})

// Create our store object
const store = createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(...middleware),
  )
)


const persistor = persistStore(store)
export default store

export function purge() {
  return persistor.purge()
}
