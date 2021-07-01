import { MomentInput } from 'moment'
import moment from 'moment-timezone'

moment.tz.setDefault('Asia/Bangkok')

export default moment

export function useFormat(input: MomentInput, format: string = 'll') {
  return moment(input).format(format)
}

export function expiryDate(input: MomentInput): number {
  const exp = moment(input).format('YYYY-MM-DD')
  const now = moment().format('YYYY-MM-DD')
  return moment(exp).diff(now, 'days')
}
