import { dateFormat } from '@/utils'

export function getDate ({ createdAt }) {
  return dateFormat(createdAt.toDate())
}

export function getTags ({ tags }) {
  return tags.join(', ')
}
