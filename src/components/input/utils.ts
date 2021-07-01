import { FieldError } from 'react-hook-form'

export const getErrors = (errors?: FieldError): string | null => {
  if (!errors) return null
  let results: any = ''

  switch (errors.type) {
    case 'required':
      results = errors.message || 'This Field is required!'
      break

    default:
      results = errors.message
      break
  }

  return results
}
