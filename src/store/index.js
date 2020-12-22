import { createStore, combineReducers } from 'redux'
import root from './root/reducer'
import storage from './storage/reducer'

const store = createStore(
  combineReducers({
    ['APP.ROOT']: root,
    ['APP.DATA']: storage
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
