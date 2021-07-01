import axios from '@/libs/axios'
import { configs, getCookie, setCookie, removeCookie, cookieOptions } from '@/libs/cookies'
import { dispatch, authActions } from '@/store'
import { resAudit, loader } from '@/utils'
import { TResponse } from '@/types'
import { FormLogin } from '@/types/forms'

export const authService = {
  /**
   * Login service.
   *
   * @Note ClientCall
   * @param {FormLogin} params
   */
  async login(params: FormLogin): Promise<TResponse | void> {
    const { data, ...payload } = await axios.post('/auth/login', params)
    const audit = resAudit(payload, data)

    if (audit && audit.status) {
      const isRemember = String(+params.remember)
      const { accessToken, expiresDate } = data

      await authService.setCookieAuth(accessToken, expiresDate, isRemember)
      await authService.getUserProfile()

      dispatch(authActions.setAuthenticated(accessToken))
    }

    return audit
  },

  /**
   * Login with Google, Facebook, Line.
   */
  // async loginWith(provider: 'google' | 'facebook' | 'line'): Promise<void> {},

  /**
   * GET user profile.
   *
   * @Note ClientCall
   */
  async getUserProfile(): Promise<void> {
    const { data, ...payload } = await axios.get('/auth/profile')
    const audit = resAudit(payload, data)

    if (audit && audit.status) {
      dispatch(authActions.setUserProfile(data))
    }

    loader('off')
  },

  /**
   * Refresh token expire.
   *
   * @Note ClientCall
   */
  async refreshToken(): Promise<TResponse | void> {
    const { data, ...payload } = await axios.get('/auth/refresh-token')
    const audit = resAudit(payload, data)

    if (audit) {
      const isRemember = getCookie(configs.APP_AUTH_MEMO)
      const { accessToken, expiresDate } = data

      authService.setCookieAuth(accessToken, expiresDate, isRemember)

      dispatch(authActions.setAuthenticated(accessToken))
    }

    loader('off')
    return audit
  },

  /**
   * Logout.
   *
   * @Note ClientCall
   */
  async logout(redirectTo?: string): Promise<void> {
    const options = cookieOptions()

    loader('on')
    removeCookie(configs.APP_AUTH, options)
    removeCookie(configs.APP_AUTH_MEMO, options)

    const cookies = document.cookie.split(';')
    for (const cookie of cookies) {
      // prettier-ignore
      document.cookie = cookie
        .replace(/^ +/, '')
        .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`)
    }

    location.href = redirectTo || '/'
  },

  /**
   * SET Cookie Auth.
   *
   * @param {string} accessToken
   * @param {string} expiresDate
   * @param {string} isRemember
   */
  setCookieAuth(accessToken: string, expiresDate: string, isRemember: string): void {
    const options = cookieOptions({
      expires: +isRemember ? new Date(expiresDate) : void 0
    })

    setCookie(configs.APP_AUTH, accessToken, options)
    setCookie(configs.APP_AUTH_MEMO, isRemember, options)
  }
}
