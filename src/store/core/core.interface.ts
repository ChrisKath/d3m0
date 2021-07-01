import { DialogOptions } from "@/types";

export type CoreAction = CoreActionTypes
export enum CoreActionTypes {
  SET_LANG    = 'SET_CORE_LANGUAGE',
  SET_LOADER  = 'SET_CORE_LOADER',
  SET_DIALOG  = 'SET_CORE_DIALOG'
}

export interface CoreActionInterface {
  type: CoreAction;
  payload: any;
}

export interface CoreState {
  company: string;
  appVersion: string;
  lang: string;
  loader: Loader;
  dialog: Dialog;
}

export interface Loader {
  visible: boolean;
  text: string;
}

export interface Dialog extends DialogOptions {
  visible: boolean;
  resolvePromise?: Function;
  rejectPromise?: Function;
}
