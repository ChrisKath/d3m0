import { isNumber, upperCase } from '@utils'

/**
 * @param {string} prop
 * @param {any} value
 */
Object.defineProperty(Array.prototype, 'findOne', {
  value: function (prop, value) {
    return [].concat(this)
      .find(r => r[prop] === value)
  }
})

/**
 * @param {string} prop
 * @param {any} value
 */
Object.defineProperty(Array.prototype, 'findAll', {
  value: function (prop, value) {
    return [].concat(this)
      .filter(r => r[prop] === value)
  }
})

/**
 * @param {string} prop
 * @param {any} value
 */
Object.defineProperty(Array.prototype, 'remove', {
  value: function (prop, value) {
    return [].concat(this)
      .filter(r => r[prop] !== value)
  }
})

/**
 * @param {string} prop
 */
Object.defineProperty(Array.prototype, 'groupBy', {
  value: function (prop) {
    return [].concat(this)
      .reduce((g, i) => {
        g[i[prop]] = g[i[prop]] || []
        g[i[prop]].push(i)
        return g
      }, {})
  }
})

/**
 * @param {string} prop
 * @param {string} type
 */
Object.defineProperty(Array.prototype, 'orderBy', {
  value: function (prop, type = 'asc') {
    return [].concat(this)
      .sort((a, b) => {
        const propA = (isNumber(a[prop]) ? a[prop] : upperCase(a[prop]))
        const propB = (isNumber(b[prop]) ? b[prop] : upperCase(b[prop]))

        return (type === 'desc')
          ? (propB < propA) ? -1 : (propB > propA) ? 1 : (propB >= propA) ? 0 : NaN
          : (propA < propB) ? -1 : (propA > propB) ? 1 : (propA >= propB) ? 0 : NaN
      })
  }
})
