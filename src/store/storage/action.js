const types = {
  ADD_ABILITY: 'ADD_ABILITY',
  ADD_COLLECT: 'ADD_COLLECT',
  ADD_EXPERIENCE: 'ADD_EXPERIENCE'
}

export const storage = {
  addAbility (payload) {
    return {
      type: types.ADD_ABILITY,
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
  }
}

export default types
