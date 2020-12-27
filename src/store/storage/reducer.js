import { storage } from '../models'
import types from './action'

export default (state = storage, { type, payload }) => {
  switch (type) {
    case types.INIT_STORAGE:
      return {
        ...state,
        ...payload
      }

    case types.ADD_COLLECT:
      return {
        ...state,
        collects: state.collects.concat(payload)
      }

    case types.ADD_EXPERIENCE:
      return {
        ...state,
        experience: state.experience.concat(payload)
      }

    case types.ADD_SKILL:
      return {
        ...state,
        skills: state.skills.concat(payload)
      }
    
    default:
      return state
  }
}
