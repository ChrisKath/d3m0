import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { getParams, scrollOff } from '@/utils'
import { InfoComponent } from './info'

export function PreviewComponent() {
  // __STATE <React.Hooks>
  const dispatch = useDispatch()
  const data = useSelector((state) => state['APP.ROOT']['preview'])
  const store = useSelector((state) => state['APP.DATA']['collects'].findOne('id', data.value))

  // __FUNCTION
  const onDispatch = (payload) => {
    dispatch({
      type: 'SET_PREVIEW',
      payload
    })
  }

  const onClose = () => {
    onDispatch({ ...data, active: false })
    // setTimeout(history.goBack, 320)
  }

  // __MOUNTED <React.Hooks>
  useEffect(() => {
    let id = getParams('cid')
    if (id) onDispatch({ active: true, value: id })
  }, [])

  // __RENDER
  return (
    <CSSTransition
      className='ui--preview'
      in={data.active}
      timeout={400}
      unmountOnExit={true}
      onEnter={() => scrollOff(true)}
      onExited={() => scrollOff(false)}
    >
      <div className='ui--preview'>
        <div className='container'>
          <div className='ui--preview-close' onClick={onClose}>
            <span className='icon bi bi-x'></span>
          </div>

          <img className='ui--preview-cover' src='/static/imgs/pic-2.jpg' />

          <InfoComponent info={store} />
        </div>
      </div>
    </CSSTransition>
  )
}
