export { Collect, Experience, Skill } from './data'

export interface IConfigs {
  APP_MODE: 'development' | 'production' | 'test';
  APP_NAME: string;
  WEB_TITLE: string;
  APP_CLIENT_SIDE: boolean;
  API_BASE_URL?: string;
  API_GATEWAY?: string;
  API_SECRET_KEY?: string;
  APP_AUTH: string;
  APP_AUTH_MEMO: string;
  APP_USER: string;
  APP_LANG: string;
  AUTH_TOKEN: string;
  CONTENT_LANG: string;
  XSRF_TOKEN: string;
  X_CSRF_TOKEN: string;
}

export interface IResponse {
  status: boolean;
  message: string;
  [propName: string]: any;
}

export interface Fruit {
  label: string;
  value: string;
}

export interface DialogOptions {
  type?: 'alert' | 'confirm';
  title?: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
}

export interface DialogResults {
  isConfirmed: boolean;
  isDenied: boolean;
}

export interface DialogMessage {
  [key: any]: string[];
}
