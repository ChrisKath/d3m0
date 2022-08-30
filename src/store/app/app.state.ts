import { Theme } from '@/constants'
import type { Dialog, Modal, Notice } from '@/types'

interface AppState {
  appVersion: string
  lang: string
  theme: Theme
  loader: boolean
  dialog: Dialog
  modal: Modal[]
  notice: Notice[]
  externals: Record<string, string>
}

export const initialState: AppState = {
  appVersion: 'v2.3-beta (August, 2022)',
  lang: 'en-US',
  theme: Theme.DEFAULT,
  loader: false,
  dialog: {
    visible: false,
    type: 'alert',
    content: null
  },
  modal: [],
  notice: [],
  externals: {
    vc: 'https://bit.ly',
    facebook: 'https://facebook.com/100007468007588',
    twitter: 'https://twitter.com/pinn_project',
    github: 'https://github.com/ChrisKath'
  }
}
