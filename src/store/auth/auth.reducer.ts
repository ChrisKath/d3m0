import { AuthState, AuthActionTypes, AuthActionInterface } from './auth.interface'
import { initialState } from './auth.state'

export default function AuthReducer(state = initialState, { type, payload }: AuthActionInterface): AuthState {
  switch (type) {
    case AuthActionTypes.SET_AUTH:
      state.isAuthenticated = Boolean(payload)
      state.passport = payload
      break

    case AuthActionTypes.SET_USER:
      state.user = payload
      break
  }

  return state
}
