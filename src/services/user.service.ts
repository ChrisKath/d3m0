import axios from '@/libs/axios'
import { resAudit } from '@/utils'
import { TResponse } from '@/types'

export const userService = {
  /**
   * GET all users.
   */
  async getAll(): Promise<TResponse | void> {
    const { data, ...payload } = await axios.get('/users')
    const audit = resAudit(payload, data)

    return audit
  },

  /**
   * GET user by userId.
   *
   * @param {string | number} id
   */
  async getById(userId: string | number): Promise<TResponse | void> {
    const { data, ...payload } = await axios.get(`/users/${userId}`)
    const audit = resAudit(payload, data)

    return audit
  }
}
