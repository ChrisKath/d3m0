import HTMLHead from 'next/head'
import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import { HeaderComponent, LoaderComponent, DialogComponent } from '@/components'
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

          <PagesContainer {...pageProps} />
        </Provider>
      </div>
    </>
  )
}
