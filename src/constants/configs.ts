export const isBrowser = process.title === 'browser' || typeof window !== 'undefined'
export const isProduction = process.env.NODE_ENV === 'production'
export const isDevelop = process.env.NODE_ENV === 'development'

export const APP_MODE = process.env.NODE_ENV
export const APP_NAME = process.env.APP_NAME || 'project_d3m0'
export const APP_WEB_TITLE = process.env.APP_WEB_TITLE || "Got't Patiphat, Web Profile;"
export const APP_BASE_URL = process.env.APP_BASE_URL || 'http://localhost:8443'
export const API_SECRET_KEY = process.env.APP_API_SECRET_KEY || 'AP1-S3C23T-K3Y'
export const API_GATEWAY = process.env.APP_API_GATEWAY || 'http://localhost:3030'
export const WS_GATEWAY = process.env.APP_WS_GATEWAY || 'ws://127.0.0.1:5050'

// STORAGE KEY-NAME
export const APP_LANG = 'APP.Language'
export const APP_THEME = 'APP.Theme'
export const APP_AUTH_ACCESS = 'APP.AccessToken'
export const APP_AUTH_REFRESH = 'APP.RefreshToken'
export const APP_USER_INFO = 'APP.UserInfo'

// REQUEST HEADERS
export const AUTH_ACCESS = 'Authorization'
export const AUTH_ADDRESS = 'User-Address'
export const CONTENT_LANG = 'Content-Language'
