import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { isDevelop } from '@/libs/configs'
import core from './core/core.reducer'
import auth from './auth/auth.reducer'
import data from './data/data.reducer'

const reducer = combineReducers({
  core,
  auth,
  data
})

const setMiddleware = () => {
  const StoreEnhancer = applyMiddleware()
  return isDevelop ? composeWithDevTools(StoreEnhancer) : StoreEnhancer
}

const createReduxStore = createStore(reducer, setMiddleware())

export default createReduxStore
export type StoreTypes = ReturnType<typeof reducer>
export const { dispatch } = createReduxStore
export { useDispatch, useSelector } from 'react-redux'
export { default as authActions } from './auth/auth.actions'
export { default as authSelector } from './auth/auth.selectors'
export { default as coreActions } from './core/core.actions'
export { default as coreSelector } from './core/core.selectors'
export { default as dataActions } from './data/data.actions'
export { default as dataSelector } from './data/data.selectors'
