import { isBrowser } from '@/libs/configs'

export { loader, dialog, viewer, resAudit } from './addon'

export function isIE(): boolean {
	return new RegExp('MSIE|Trident').test(navigator.userAgent)
}

/**
 * UUID Generator.
 */
export function keyCode(): string {
	return `${1e8}-${1e4}-${1e4}-${1e4}-${1e12}`.replace(/[018]/g, (c: any) =>
		(c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
	)
}

export function generateId(): string {
	return Math.random().toString(16).substr(2)
}

/**
 * Date format.
 *
 * @param {date|any} input
 */
export function dateTimeFormat(input: Date | any = Date.now()): string {
	const $intl = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' })
	let date = new Date(input)
	return $intl.format(date)
}

/**
 * Hidden overflow scroll.
 *
 * @param {boolean} input
 */
export function scrollOff(input: boolean = true): void {
	document.body.style.overflow = input ? 'hidden' : 'auto'
}

/**
 * Truncate limitor text.
 *
 * @param {string} input
 * @param {number} limit
 */
export function truncate(input: string, limit: number): string {
	if (input.length <= limit) return input

	const bake = '...'
	let x = input.substr(0, limit)
	let n = input.lastIndexOf(' ')

	if (n > -1) x = input.substr(0, n)

	return `${x}${bake}`
}

/**
 * Convert long number into abbreviated string.
 *
 * @param {number} input
 */
export function abbreviateNumber(input: number): number | string {
	const length = input.toString().length

	if (length < 4) return input

	const suffix = ['k', 'm', 'b', 't', 'p', 'e']
	const index = Math.ceil((length - 3) / 3)

	return (input / Math.pow(1000, index)).toFixed(1).replace(/\.0$/, '') + suffix[index - 1]
}

/**
 * Convert number to price.
 *
 * @param {number|string} input
 * @param {number} fix delimiters
 */
export function price(input: number | string, fix: number): string {
	const n = Number(input)
		.toFixed(fix || 0)
		.toString()
	return n.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

/**
 * Pad Digits
 *
 * @param {number} number
 * @param {number} digits
 */
export function pad(number: number, digits: number): string {
	const arr = Array(Math.max(digits - number.toString().length + 1, 0))
	return arr.join('0') + number
}

/**
 * clone.
 *
 * @param {object|array} input
 */
export function clone(input: any) {
	return JSON.parse(JSON.stringify(input))
}

/**
 * Convert to Upper Case.
 *
 * @param {string} input
 */
export function upperCase(input: string): string {
	return input.toUpperCase()
}

/**
 * Convert to Lower Case.
 *
 * @param {string} input
 */
export function lowerCase(input: string): string {
	return input.toLowerCase()
}

/**
 * Convert to Capitalize.
 *
 * @param {string} input
 */
export function capitalize(input: string): string {
	const array = input.split(/[ ]+/)
	return array
		.map((word) => {
			return `${upperCase(word.charAt(0))}${word.slice(1)}`
		})
		.join(' ')
}

/**
 * Create an object containing the parameters of the current URL.
 *
 * @param {string} input
 */
export function getParams(input?: string): any {
	const queryString = input || location.search
	const queries = (queryString.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
		(a: any, v: string) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
		{}
	)

	for (const key in queries) {
		let a = queries[key]
		queries[key] = isNaN(a) ? a : +a
	}

	return queries
}

/**
 * GET: Cookie from cookies-string.
 * 
 * @param {string} cookies
 * @param {string} keyName
 */
export function getCookies(cookies: string | void, keyName: string): string | void {
  if (!cookies) return void 0

  let results: any = {}
	
  for (const cookie of cookies.split(';')) {
    let a = cookie.split('=')
    results[a[0].trim()] = a[1]
  }

	if (Object.keys(results).length) {
		return void 0
	}

  return results[keyName]
}

/**
 * Convert json to querystring.
 * 
 * @param {object} data
 */
export function toQuery (data: any) {
	return '?' + Object.keys(data).map((key: string) => {
		return encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
	}).join('&')
}

/**
 * User device chacker.
 *
 * @param {string} device
 */
export function isDevice(device: 'desktop' | 'mobile' | 'tablet' | 'both', userAgent?: string): boolean {
	userAgent = lowerCase(userAgent || navigator.userAgent)

	if (!isBrowser && !userAgent) return false
	
	const mobile = /android|webos|iphone|ipod|blackberry|ismobile|opera mini/ig
	const tablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(ip|ap|wp))))/ig
	const valid = {
		desktop: !mobile.test(userAgent) && !tablet.test(userAgent),
		mobile: mobile.test(userAgent),
		tablet: tablet.test(userAgent),
		both: mobile.test(userAgent) && tablet.test(userAgent)
	}

	return valid[device]
}


/**
 * Handle file missing.
 * 
 * @param {any} event
 */
export function file404 (event: any): void {
	const texture = '/static/media/file-missing.png'
	const IMG = event.target

	if (!IMG.dataset?.origin) {
		IMG.dataset.origin = IMG.src
	}

	IMG.src = texture
	// IMG.classList.add('_404')
	
	// setTimeout(() => {
	// 	IMG.src = IMG.dataset.origin
	// 	IMG.classList.remove('_404')
	// }, 1e4)
}

/**
 * Appends an event listener for events whose type attribute value is type.
 * The callback argument sets the callback that will be invoked when the event is dispatched.
 */
export function addEventListener (type: keyof WindowEventMap, listener: Function | any): void {
	if (isBrowser) {
		window.addEventListener(type, listener, true)
	}
}

export function removeEventListener (type: keyof WindowEventMap, listener: Function | any): void {
	if (isBrowser) {
		window.removeEventListener(type, listener, true)
	}
}
