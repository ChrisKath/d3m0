import { DataState, DataActionTypes, DataActionInterface } from './data.interface'
import { initialState } from './data.state'

export default function DataReducer(state = initialState, { type, payload }: DataActionInterface): DataState {
  switch (type) {
    case DataActionTypes.SET_COLLECT:
      state.collects = payload
      break

    case DataActionTypes.SET_EXPERIENCE:
      state.experience = payload
      break

    case DataActionTypes.SET_SKILL:
      state.skills = payload
      break

    case DataActionTypes.SET_VIEWER:
      state.viewer = payload
      break
  }

  return state
}
