import { CoreState } from './core.interface'

export const initialState: CoreState = {
  company: 'Unknown Co., Ltd.',
  appVersion: 'v1.0-demo (Jun, 2021)',
  lang: 'th-TH',
  loader: {
    visible: false,
    text: 'rendering...'
  },
  dialog: {
    type: 'alert',
    visible: false,
    message: '',
    confirmLabel: 'OK',
    cancelLabel: 'Cancel'
  }
}
