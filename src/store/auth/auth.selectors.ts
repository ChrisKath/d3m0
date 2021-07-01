import { StoreTypes } from '@/store'

export default {
  getAuthenticated({ auth: { isAuthenticated } }: StoreTypes) {
    return isAuthenticated
  },

  getPassport({ auth: { passport } }: StoreTypes) {
    return passport
  },

  getUser({ auth: { user } }: StoreTypes) {
    return user
  }
}
