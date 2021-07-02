import { Collect, Experience, Skill } from '@/types'

export type DataAction = DataActionTypes
export enum DataActionTypes {
  SET_COLLECT = 'SET_DATA_COLLECT',
  SET_EXPERIENCE = 'SET_DATA_EXPERIENCE',
  SET_SKILL = 'SET_DATA_SKILL'
}

export interface DataActionInterface {
  type: DataAction;
  payload: any;
}

export interface DataState {
  collects: Collect[];
  experiences: Experience[];
  skills: Skill[];
}
