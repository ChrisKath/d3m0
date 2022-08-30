export * as configs from './configs'
export { Fruit } from './fruit'
export { Collects, Experiences, Skills } from './data'

export enum Theme {
  DEFAULT = 'default',
  LIGHT = 'light',
  DARK = 'dark'
}

export enum DialogName {
  SYSTEM_ALERT = '@DIALOG:SYSTEM_ALERT'
}

export enum ModalName {
  CONNECT_WALLET = '@MODAL:CONNECT_WALLET'
}

export enum NoticeName {
  SYSTEM_NOTICE = '@NOTICE:SYSTEM_NOTICE'
}
