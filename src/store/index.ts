import { createStore } from 'vuex'

// Load store modules dynamically.
const requireContext: any = require.context('./modules', true, /.*\.ts$/)
const modules: any = requireContext.keys()
  .map((file: string): any => {
    return [
      file.replace(/(^.\/)|(\.ts$)/g, ''),
      requireContext(file)
    ]
  })
  .reduce((modules: any, [name, module]: any): any => {
    if (undefined === module.namespaced) module.namespaced = true
    return {
      ...modules,
      [name]: module
    }
  }, {})

export default createStore({
  modules,
  strict: process.env.NODE_ENV !== 'production'
})
