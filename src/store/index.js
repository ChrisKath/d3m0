import { createStore, combineReducers } from 'redux'
import root from './reducer/root'
import storage from './reducer/storage'

const store = createStore(
  combineReducers({
    ['APP.ROOT']: root,
    ['APP.DATA']: storage
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
