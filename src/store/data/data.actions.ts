import { Collect, Experience, Skill } from '@/types'
import { DataActionInterface, DataActionTypes } from './data.interface'

export default {
  setCollects(payload: Collect[]): DataActionInterface {
    return {
      type: DataActionTypes.SET_COLLECT,
      payload
    }
  },

  setExperience(payload: Experience[]): DataActionInterface {
    return {
      type: DataActionTypes.SET_EXPERIENCE,
      payload
    }
  },

  setSkills(payload: Skill[]): DataActionInterface {
    return {
      type: DataActionTypes.SET_SKILL,
      payload
    }
  },

  setViewer(payload?: Collect): DataActionInterface {
    return {
      type: DataActionTypes.SET_VIEWER,
      payload
    }
  }
}
