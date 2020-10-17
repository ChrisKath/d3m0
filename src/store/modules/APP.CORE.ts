// State
export const state: any = {
  load: [false, ''],
  lang: 'en-US'
}

// Getters
export const getters: any = {
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