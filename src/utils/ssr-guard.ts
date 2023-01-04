import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { configs } from '@/constants'

export type Context = GetServerSidePropsContext
export type ContextResult<T> = GetServerSidePropsResult<T>

export function useServerSideGuard<T = any>(callback?: (context: Context) => ContextResult<T>) {
  return (context: Context): ContextResult<T> => {
    const isAuthenticated = context.req.cookies[configs.APP_AUTH_REFRESH]
    const url = context.req.url || ''

    if (!isAuthenticated) {
      // Redirect to {secure page} when not logged-in.
      if (!/^\/secure/gi.test(url)) {
        return {
          redirect: {
            destination: '/secure',
            permanent: false
          }
        }
      }
    } else {
      if (/^\/secure/gi.test(url)) {
        return {
          redirect: {
            destination: '/',
            permanent: false
          }
        }
      }
    }

    // Pass data to the page via props
    return callback ? callback(context) : { props: {} as T }
  }
}
