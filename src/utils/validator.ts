export const digitsValidator = (message?: string) => {
  return {
    value: /^[0-9]+$/,
    message: message || 'The field must be numeric only.'
  }
}

export const phoneValidator = (message?: string) => {
  return {
    value: /^\+?[0-9]{4,12}$/,
    message: message || 'The field must be a valid phone number.'
  }
}

export const emailValidator = (message?: string) => {
  return {
    value:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: message || 'The field must be a valid email.'
  }
}

export function citizenValidator(value: string): boolean | string {
  if (!value) return true

  let sum: number = 0
  value = value.replaceAll('-', '')

  for (let i = 0; i < 12; i++) {
    sum += parseInt(value.charAt(i)) * (13 - i)
  }

  if ((11 - (sum % 11)) % 10 === parseInt(value.charAt(12))) {
    return true
  }

  return 'Your Citizen ID is invalid.'
}

export const confirmPasswordValidator = (watch: Function, value: string): boolean | string => {
  return value === watch('password') || 'Password confirmation does not match.'
}

export const imageValidator = (files: any, message?: string): boolean | string => {
  if (!Object.keys(files).length) return true

  let regex = /\.(jpg|svg|jpeg|png|bmp|gif|webp)$/i
  let text = 'The field must be an image.'

  if (typeof files === 'object' && files.length) {
    return (files.every((file: File) => regex.test(file.name)) && message) || text
  }

  return (regex.test(files.name) && message) || text
}
