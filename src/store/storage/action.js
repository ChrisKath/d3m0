const types = {
  ADD_COLLECT: 'ADD_COLLECT',
  ADD_EXPERIENCE: 'ADD_EXPERIENCE',
  ADD_SKILL: 'ADD_SKILL'
}

export const storage = {
  addCollect (payload) {
    return {
      type: types.ADD_COLLECT,
      payload
    }
  },

  addExperience (payload) {
    return {
      type: types.ADD_EXPERIENCE,
      payload
    }
  },

  addSkill (payload) {
    return {
      type: types.ADD_SKILL,
      payload
    }
  }
}

export default types
