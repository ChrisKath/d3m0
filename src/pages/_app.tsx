import HTMLHead from 'next/head'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import {
  HeaderComponent,
  FooterComponent,
  LoaderComponent,
  DialogComponent,
  ParallaxComponent,
  ViewerComponent,
  BackToTopComponent
} from '@/components'
import { configs } from '@/libs/configs'
import store from '@/store'
import { loader } from '@/utils'
import '@/utils/defineProperty'
import '@style/main.scss'

export default function Application({ Component: PagesContainer, pageProps }: AppProps) {
  // __STATE <Rect.Hooks>
  const router = useRouter()

  // __EFFECTS <React.Hooks>
  useEffect(() => {
    router.events.on('routeChangeStart', () => loader('on'))
    router.events.on('routeChangeComplete', () => loader('off'))
    router.events.on('routeChangeError', () => loader('off'))
  }, [])

  // __RENDER
  return (
    <>
      <HTMLHead>
        <title>{configs.WEB_TITLE}</title>
      </HTMLHead>

      <div className='ui--wrapper'>
        <Provider store={store}>
          <HeaderComponent />
          <LoaderComponent />
          <DialogComponent />
          <ParallaxComponent />

          <PagesContainer {...pageProps} />

          <ViewerComponent />
          <BackToTopComponent />
          <FooterComponent />
        </Provider>
      </div>
    </>
  )
}
