import { root } from '../models'

export const types = {
  SET_LOADER  : 'SET_LOADER',
  SET_LANG    : 'SET_LANGUAGE',
  SET_PREVIEW : 'SET_PREVIEW'
}

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

    case types.SET_PREVIEW:
      return {
        ...state,
        preview: payload
      }
    
    default:
      return state
  }
}
