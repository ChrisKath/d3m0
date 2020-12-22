import { storage } from '../models'
import types from './action'

export default (state = storage, { type, payload }) => {
  switch (type) {
    case types.ADD_ABILITY:
      return {
        ...state,
        ability: state.ability.concat(payload)
      }

    case types.ADD_COLLECT:
      return {
        ...state,
        collect: state.collect.concat(payload)
      }

    case types.ADD_EXPERIENCE:
      return {
        ...state,
        experience: state.experience.concat(payload)
      }
    
    default:
      return state
  }
}
