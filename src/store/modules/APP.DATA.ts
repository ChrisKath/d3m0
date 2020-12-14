import { db, docs } from '@/configs/firebase'

// State
export const state: any = {
  collects: [],
  experience: [],
  skills: [],
}

// Getters
export const getters: any = {
  collects (state: any): any[] {
    return state.collects
  },

  experience (state: any): any[] {
    return state.experience
  },

  skills (state: any): any[] {
    return state.skills
  }
}

// Mutations
export const mutations: any = {
  SET_STATE (state: any, payload: any): void {
    state[payload.field] = payload.data
  }
}

// Actions
export const actions: any = {
  /**
   * GET collection from firestore.
   */
  pull ({ commit }: any, param: string): void {
    db.collection(param)
      .get()
      .then((response: any): void => {
        commit('SET_STATE', {
          field: param,
          data: docs(response.docs)
        })
      })
  }
}