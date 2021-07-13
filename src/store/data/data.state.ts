import { collects, experience, skills } from '@/store/state'
import { DataState } from './data.interface'

export const initialState: DataState = {
  collects,
  experience,
  skills
}
