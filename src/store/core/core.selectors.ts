import { StoreTypes } from '@/store'

export default {
  getCompony({ core }: StoreTypes) {
    return core.company
  },

  getAppVersion({ core }: StoreTypes) {
    return core.appVersion
  },

  getLanguage({ core }: StoreTypes) {
    return core.lang
  },

  getLoader({ core }: StoreTypes) {
    return core.loader
  },

  getDialog({ core }: StoreTypes) {
    return core.dialog
  }
}
