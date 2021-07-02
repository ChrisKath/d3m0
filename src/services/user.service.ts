import axios from '@/libs/axios'
import { resAudit } from '@/utils'
import { IResponse } from '@/types'

export const userService = {
  /**
   * GET all users.
   */
  async getAll(): Promise<IResponse | void> {
    const { data, ...payload } = await axios.get('/users')
    const audit = resAudit(payload, data)

    return audit
  },

  /**
   * GET user by userId.
   *
   * @param {string} userId
   */
  async getById(userId: string): Promise<IResponse | void> {
    const { data, ...payload } = await axios.get(`/users/${userId}`)
    const audit = resAudit(payload, data)

    return audit
  }
}
