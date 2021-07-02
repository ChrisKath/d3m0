import { StoreTypes } from '@/store'

export default {
  getCompony({ core: { company } }: StoreTypes) {
    return company
  },

  getAppVersion({ core: { appVersion } }: StoreTypes) {
    return appVersion
  },

  getLanguage({ core: { lang } }: StoreTypes) {
    return lang
  },

  getLoader({ core: { loader } }: StoreTypes) {
    return loader
  },

  getDialog({ core: { dialog } }: StoreTypes) {
    return dialog
  },

  getLinks({ core: { externalLinks } }: StoreTypes) {
    return externalLinks
  }
}
