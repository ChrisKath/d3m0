// State
export const state: any = {
  appVersion: 'v2.0 (oct, 2020)',
  load: [false, ''],
  lang: 'en-US',
}

// Getters
export const getters: any = {
  appVersion (state: any): string {
    return state.appVersion
  },

  load (state: any): any {
    return state.load
  },

  lang (state: any): string {
    return state.lang
  }
}

// Mutations
export const mutations: any = {
  SET_STATE (state: any, payload: any): void {
    state[payload.field] = payload.data
  }
}

// Actions
export const actions: any = {}