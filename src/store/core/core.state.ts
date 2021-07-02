import { CoreState } from './core.interface'

export const initialState: CoreState = {
  company: 'Undefined Co., Ltd.',
  appVersion: 'v2.2-demo (July, 2021)',
  lang: 'en-US',
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
  },
  externalLinks: {
    resume: 'https://bit.ly',
    facebook: 'https://facebook.com/100007468007588',
    twitter: 'https://twitter.com/pinn_project',
    github: 'https://github.com/pinn-project'
  }
}
