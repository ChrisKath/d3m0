import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { getParam, scrollhidden } from '@/utils'
import InfoComponent from './info'
import pic from '@img/pic-2.jpg'

export default function PreviewComponent () {
  // __STATE <React.Hooks>
  const dispatch  = useDispatch()
  const history   = useHistory()
  const data      = useSelector(state => state['APP.ROOT']['preview'])
  const store     = useSelector(state => state['APP.DATA']['collects']
    .findOne('id', data.value))

  // __FUNCTION
  const onDispatch = payload => {
    dispatch({
      type: 'SET_PREVIEW',
      payload
    })
  }

  const onClose = () => {
    onDispatch({ ...data, active: false })
    setTimeout(history.goBack, 320)
  }

  // __MOUNTED <React.Hooks>
  useEffect(() => {
    let id = getParam('cid')
    if (id) onDispatch({ active: true, value: id })
  }, [])
  
  // __RENDER
  return (
    <CSSTransition
      className="ui--preview"
      in={data.active}
      timeout={320}
      unmountOnExit={true}
      onEnter={() => scrollhidden(true)}
      onExited={() => scrollhidden(false)}>

      <div className="ui--preview">
        <div className="container">
          <div className="ui--preview-close" onClick={onClose}>
            <svg className="icon bi bi-x" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </div>

          <img className="ui--preview-cover" src={pic} />

          <InfoComponent info={store} />
        </div>
      </div>

    </CSSTransition>
  )
}
