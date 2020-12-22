const types = {
  SET_LOADER: 'SET_LOADER',
  SET_LANG: 'SET_LANGUAGE'
}

export const root = {
  onLoad (payload) {
    return {
      type: types.SET_LOADER,
      payload
    }
  },

  setLang (payload) {
    return {
      type: types.SET_LANG,
      payload
    }
  }
}

export default types
