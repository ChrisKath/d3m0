export function isIE () {
  return new RegExp('MSIE|Trident').test(navigator.userAgent)
}

export function isObjectEmpty (input) {
  if (Object.getOwnPropertyNames) {
    return (Object.getOwnPropertyNames(input).length === 0)
  } else {
    for (let key in input) {
      if (hasProp(input, key)) {
        return false
      }
    }
    return true
  }
}

export function isObject (input) {
  // IE8 will treat undefined and null as object if it wasn't for
  // input != null
  return input != null && Object.prototype.toString.call(input) === '[object Object]'
}

export function isArray (input) {
  return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]'
}

export function isFunction (input) {
  return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]'
}

export function isNumber (input) {
  return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]'
}

export function isDate (input) {
  return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]'
}

export function isUndefined (input) {
  return input === void 0
}

export function hasProp (object, prop) {
  return object.hasOwnProperty(prop) || Object.prototype.hasOwnProperty.call(object, prop)
}

export function hasArray (input) {
  return isArray(input) ? input.length : 0
}

/**
 * Key generator.
 */
export function keyCode () {
  return (`${1e4}-${1e4}-${4e4}-${1e6}`).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16))
}

/**
 * Date format.
 * 
 * @param {date|any} input
 */
export function dateFormat (input = Date.now()) {
  const $intl = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' })
  let date = new Date(input)
  return $intl.format(date)
}

/**
 * Truncate limitor text.
 * 
 * @param {string} input
 * @param {number} limit
 */
export function truncate (input, limit) {
  if (input.length <= limit) return input

  const bake = '...'
  let x = input.substr(0, limit)
  let n = input.lastIndexOf(' ')

  if (n > -1) x = input.substr(0, n)

  return String(`${x}${bake}`)
}

/**
 * Convert to Price.
 * 
 * @param {number|string} input
 * @param {number} fix delimiters
 */
export function price (input, fix) {
  const n = Number(input).toFixed(fix || 0).toString()
  return n.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

/**
 * Pad Digits
 * 
 * @param {number} number
 * @param {number} digits
 */
export function pad (number, digits) {
  const arr = Array(Math.max(digits - String(number).length + 1, 0))
  return arr.join(0) + number
}

/**
 * clone.
 * 
 * @param {object|array} input
 */
export function clone (input) {
  return JSON.parse(JSON.stringify(input))
}

/**
 * Convert to Upper Case.
 * 
 * @param {string} input
 */
export function upperCase (input) {
  return String(input).toUpperCase()
}

/**
 * Convert to Lower Case.
 * 
 * @param {string} input
 */
export function lowerCase (input) {
  return String(input).toLowerCase()
}

/**
 * Convert to Capitalize.
 * 
 * @param {string} input
 */
export function capitalize (input) {
  const array = String(input).split(/[ ]+/)
  return array.map(word => {
    return `${upperCase(word.charAt(0))}${word.slice(1)}`
  }).join(' ')
}

/**
 * Striptag HTML.
 * 
 * @param {string} input
 */
export function stripTag (input) {
  const tag = new RegExp(/<[^>]+>/, 'g')
  return input.replace(tag, '')
}

/**
 * Entities HTML symbol code.
 * 
 * @param {string} input
 */
export function entities (input) {
  const str = String(input)

  return {
    encode: () => {
      let buf = []
      
      for (let i = str.length-1; i >= 0; i--) {
        buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''))
      }
      
      return buf.join('')
    },

    decode: () => {
      return str.replace(/&#(\d+);/g, (match, dec) => {
        return String.fromCharCode(dec)
      })
    }
  }
}

/**
 * Convert elm Hightlight.
 * 
 * @param {string} input
 * @param {string} search
 */
export function hls (input, search) {
  const regExp = new RegExp(search, 'gi')
  const hls = String(input).replace(regExp, match => `<span class=ui--hls>${match}</span>`)
  return search ? hls : input
}
