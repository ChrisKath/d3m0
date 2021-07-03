import { collects, experiences, skills } from '@/store/state'
import { DataState } from './data.interface'

export const initialState: DataState = {
  collects,
  experiences,
  skills
}
