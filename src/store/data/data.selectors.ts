import { StoreTypes } from '@/store'
import { Collect } from '@/types'

export default {
  getCollects({ data: { collects } }: StoreTypes) {
    return collects
  },

  getExperiences({ data: { experiences } }: StoreTypes) {
    return experiences
  },

  getSkills({ data: { skills } }: StoreTypes) {
    return skills
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
