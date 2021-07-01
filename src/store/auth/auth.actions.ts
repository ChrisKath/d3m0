import { AuthActionInterface, AuthActionTypes, User } from './auth.interface'

export default {
  setAuthenticated(payload: string): AuthActionInterface {
    return {
      type: AuthActionTypes.SET_AUTH,
      payload
    }
  },

  setUserProfile(payload: User): AuthActionInterface {
    return {
      type: AuthActionTypes.SET_USER,
      payload
    }
  }
}
