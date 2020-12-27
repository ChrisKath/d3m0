const types = {
  INIT_STORAGE: 'INIT_STORAGE',
  ADD_COLLECT: 'ADD_COLLECT',
  ADD_EXPERIENCE: 'ADD_EXPERIENCE',
  ADD_SKILL: 'ADD_SKILL'
}

export const storage = {
  initStorage (payload) {
    return {
      type: types.INIT_STORAGE,
      payload
    }
  },

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
