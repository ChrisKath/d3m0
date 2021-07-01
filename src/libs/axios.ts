import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { configs, isBrowser } from './configs'
import { getCookie } from './cookies'

/**
 * Create axios instance.
 */
const Axios: AxiosInstance = axios.create({
  baseURL: `${configs.API_GATEWAY}/api/v2`,
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin': isBrowser ? location.origin : '*',
    'Access-Control-Allow-Methods': 'GET,POST,PATCH,DELETE'
  }
})

/**
 * Axios also provides a request interceptor, allows changes to the request data before it is sent to the server
 * This is only applicable for request methods 'PUT', 'POST', 'PATCH' and 'DELETE'
 * The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
 * FormData or Stream
 * You may modify the headers object.
 */
Axios.interceptors.request.use((requestConfig) => {
  if (isBrowser) {
    const token = getCookie(configs.APP_AUTH)

    if (token) {
      requestConfig.headers.Authorization = `Bearer ${token}`
    }
  }

  return requestConfig
})

/**
 * allows changes to the response data to be made before
 * it is passed to then/catch
 */
Axios.interceptors.response.use(
  (res) => res,
  (err) => (isBrowser ? Promise.resolve(err) : Promise.reject(err))
)

export default Axios

export function useAuthorize({ headers }: NextApiRequest): AxiosRequestConfig {
  return {
    headers: {
      authorization: headers.authorization
    }
  }
}

/**
 * Response Errors.
 *
 * @param {NextApiResponse} res
 * @param {Error} error
 */
export function resError(res: NextApiResponse, { response: { status } }: any) {
  res.status(status || 202)
  res.end()
}
