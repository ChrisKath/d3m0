import dynamic from 'next/dynamic'

export { NextLink } from './next-link'
export { HeaderComponent } from './header'
export { FooterComponent } from './footer'
export { ParallaxComponent } from './parallax'
// export { BackToTopComponent } from './backtotop'

// Without SSR
export const AppProvider = {
  Dialog: dynamic(() => import('./base/dialog'), { ssr: false }),
  Listener: dynamic(() => import('./listener'), { ssr: false }),
  Loader: dynamic(() => import('./base/loader'), { ssr: false }),
  Modal: dynamic(() => import('./base/modal'), { ssr: false }),
  Notice: dynamic(() => import('./base/notice'), { ssr: false })
}
