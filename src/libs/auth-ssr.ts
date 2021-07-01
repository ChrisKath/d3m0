import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { configs } from '@/libs/configs'

export type Context = GetServerSidePropsContext
export type ContextResult = GetServerSidePropsResult<{}>

export function useMiddleware(callback?: Function) {
  return (context: Context): ContextResult => {
    const isAuthenticated: string = context.req.cookies[configs.APP_AUTH]
    const url: string = context.req.url || ''

    if (!isAuthenticated) {
      let isPageIgnore = !/login|register/i.test(url)

      // Redirect to Login page when not logged-in.
      if (isPageIgnore) {
        return {
          redirect: {
            destination: '/login',
            statusCode: 307
          }
        }
      }
    } else if (!/profile/i.test(url)) {
      // Redirect to Home page when logged-in and page-target not match Profile.
      // only requires auth page used this middleware.
      return {
        redirect: {
          destination: '/',
          statusCode: 307
        }
      }
    }

    // Pass data to the page via props
    return callback ? callback(context) : { props: {} }
  }
}
