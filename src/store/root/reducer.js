import { root } from '../models'
import types from './action'

export default (state = root, { type, payload }) => {
  switch (type) {
    case types.SET_LOADER:
      return {
        ...state,
        load: payload
      }

    case types.SET_LANG:
      return {
        ...state,
        lang: payload
      }
    
    default:
      return state
  }
}
