import { DialogOptions } from '@/types'

export type CoreAction = CoreActionTypes
export enum CoreActionTypes {
  SET_LANG = 'SET_CORE_LANGUAGE',
  SET_LOADER = 'SET_CORE_LOADER',
  SET_THEME = 'SET_CORE_THEME',
  SET_DIALOG = 'SET_CORE_DIALOG'
}

export interface CoreActionInterface {
  type: CoreAction;
  payload: any;
}

export interface CoreState {
  company: string;
  appVersion: string;
  lang: string;
  theme: Theme;
  loader: Loader;
  dialog: Dialog;
  externalLinks: ExternalLinks;
}

export interface Loader {
  visible: boolean;
  text: string;
}

export type Theme = 'default' | 'light' | 'dark'

export interface Dialog extends DialogOptions {
  visible: boolean;
}

export interface ExternalLinks {
  [propName: string]: string;
  resume: string;
  facebook: string;
  twitter: string;
  github: string;
}
