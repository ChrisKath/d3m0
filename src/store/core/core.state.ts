import { CoreState } from './core.interface'

export const initialState: CoreState = {
  company: 'Undefined Co., Ltd.',
  appVersion: 'v2.2-demo (July, 2021)',
  lang: 'en-US',
  theme: 'default',
  loader: {
    visible: false,
    text: 'rendering...'
  },
  dialog: {
    visible: false,
    type: 'alert',
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
