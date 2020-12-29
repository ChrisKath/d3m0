import { storage } from '../models'

export const types = {
  INIT_STORAGE    : 'INIT_STORAGE',
  ADD_COLLECT     : 'ADD_COLLECT',
  ADD_EXPERIENCE  : 'ADD_EXPERIENCE',
  ADD_SKILL       : 'ADD_SKILL'
}

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
