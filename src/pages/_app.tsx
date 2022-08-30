import HTMLHead from 'next/head'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { AppProvider, FooterComponent, HeaderComponent, ParallaxComponent } from '@/components'
import { configs } from '@/constants'
import { useLoader } from '@/hooks'
import { Store } from '@/store'
import '@/styles/main.scss'

export default function Application({ Component, pageProps }: AppProps) {
  // __STATE <Rect.Hooks>
  const router = useRouter()
  const loader = useLoader()

  // __FUNCTION's
  const initialGoogleTagManager = useCallback(() => {
    window.dataLayer = [...(window.dataLayer || []), { js: new Date() }, { config: 'G-5E0FTWB4GX' }]
    window.gtag = () => window.dataLayer.push(arguments)
  }, [])

  // __EFFECTS's
  useEffect(() => {
    if (configs.isProduction) initialGoogleTagManager()

    router.events.on('routeChangeStart', loader.on)
    router.events.on('routeChangeComplete', loader.off)
    router.events.on('routeChangeError', loader.off)
  }, [])

  // __RENDER
  return (
    <>
      <HTMLHead>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{configs.APP_WEB_TITLE}</title>
      </HTMLHead>

      <ReduxProvider store={Store}>
        <ParallaxComponent />

        <div className='ui--app-wrapper'>
          <HeaderComponent />

          <main className='ui--router-view'>
            <Component {...pageProps} />
          </main>

          <FooterComponent />
        </div>

        <AppProvider.Listener />
        <AppProvider.Loader />
        <AppProvider.Dialog />
        <AppProvider.Modal />
        <AppProvider.Notice />
      </ReduxProvider>
    </>
  )
}
