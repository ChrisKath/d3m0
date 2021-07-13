import { dispatch, coreActions, dataActions } from '@/store'
import { DialogOptions, DialogResults, Collect } from '@/types'

/**
 * Loader.
 *
 * @param {string} visible
 * @param {string} text
 */
export function loader(visible: 'on' | 'off' = 'on', text?: string): void {
  const action = coreActions.setLoader({
    visible: visible === 'on',
    text: text || 'loading...'
  })

  dispatch(action)
}

/**
 * Alert box.
 *
 * @param {object | string} options
 */
export function dialog(options: DialogOptions | string): Promise<DialogResults> {
  return new Promise((resolve, reject) => {
    let payload: any = {
      visible: true,
      resolvePromise: resolve,
      rejectPromise: reject
    }

    if (typeof options === 'string') {
      payload.message = options
    } else {
      payload = Object.assign(payload, options)
    }

    const action = coreActions.setDialog(payload)
    dispatch(action)
    loader('off')
  })
}

/**
 * Open collect viewer component.
 *
 * @param {object} collect
 */
export function viewer(collect?: Collect) {
  const action = dataActions.setViewer(collect)
  dispatch(action)
}

/**
 * Axios response auditor.
 *
 * @param {object} payload
 */
export function resAudit(payload: any, data: any) {
  if (payload.isAxiosError) {
    const { status, statusText } = payload.response

    dialog({
      title: 'XHR Error.',
      message: `<p>Something was wrong!</p><small>${status} ${statusText}.</small>`
    })

    return void 0
  }

  return { status: true, ...data }
}
