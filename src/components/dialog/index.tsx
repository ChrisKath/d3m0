import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { coreActions, coreSelector } from '@/store'
import { scrollOff, addEventListener, removeEventListener } from '@/utils'

export function DialogComponent() {
  // __STATE <React.Hooks>
  const dispatch = useDispatch()
  const dialog = useSelector(coreSelector.getDialog)
  const useConfirm = dialog.type === 'confirm'

  // __EFFECTS <React.Hooks>
  useEffect(() => {
    function listener(event: KeyboardEvent) {
      let keyCode: string = event.code || event.key

      switch (keyCode) {
        case 'Enter':
        case 'Space':
          // event.preventDefault()
          handleClose()
          break

        case 'Escape':
          // event.preventDefault()
          handleClose(false)
          break
      }
    }

    if (dialog.visible) {
      handleFocus()
      addEventListener('keydown', listener)
    } else {
      setTimeout(() => {
        removeEventListener('keydown', listener)
      }, 1e3)
    }
  }, [dialog.visible])

  // __FUNCTIONS
  const handleClose = (value: boolean = true) => {
    if (dialog.resolvePromise) {
      dialog.resolvePromise({
        isConfirmed: value,
        isDenied: !value
      })
    }

    // Close dialog.
    dispatch(
      coreActions.setDialog({
        ...dialog,
        visible: false,
        resolvePromise: void 0,
        rejectPromise: void 0
      })
    )
  }

  const handleFocus = (): void => {
    const button: any = document.querySelector('.ui--dialog .btn-confirm')
    if (button) button.focus()
  }

  // __RENDER
  return (
    <CSSTransition
      className='ui--dialog'
      in={dialog.visible}
      timeout={160}
      unmountOnExit={true}
      onEnter={() => scrollOff(true)}
      onExited={() => scrollOff(false)}
    >
      <div className='ui--dialog'>
        <div className='ui--dialog-container'>
          <div className='ui--dialog-header'>
            <div className='title'>{dialog.title || 'System Alert'}</div>

            <button type='button' className='btn btn-close' onClick={() => handleClose(false)}>
              <span className='icon bi bi-x'></span>
            </button>
          </div>

          <div className='ui--dialog-body' dangerouslySetInnerHTML={{ __html: dialog.message }}></div>

          <div className='ui--dialog-footer'>
            {useConfirm && (
              <button type='button' className='btn btn-cancel btn-default' onClick={() => handleClose(false)}>
                {dialog.cancelLabel}
              </button>
            )}

            <button type='button' className='btn btn-confirm btn-primary' onClick={() => handleClose()}>
              {dialog.confirmLabel}
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}
