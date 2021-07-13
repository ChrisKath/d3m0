import { StoreTypes } from '@/store'
import { Collect } from '@/types'

export default {
  getCollects({ data: { collects } }: StoreTypes) {
    return collects
  },

  getExperience({ data: { experience } }: StoreTypes) {
    return experience
  },

  getSkills({ data: { skills } }: StoreTypes) {
    return skills
  },

  getViewer({ data: { viewer } }: StoreTypes) {
    return viewer
  },

  /**
   * GET collect by Id.
   *
   * @param {onject} state
   * @param {string} collectId
   */
  getCollectById({ data: { collects } }: StoreTypes | any, collectId: string): Collect {
    return collects.find(({ id }: Collect) => id === collectId)
  }
}
