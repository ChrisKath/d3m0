import { useState, useEffect, useCallback } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useDispatch, useSelector, dataActions, dataSelector } from '@/store'
import { scrollOff } from '@/utils'
import { InfoComponent } from './info'

export function ViewerComponent() {
  // __STATE <React.Hooks>
  const dispatch = useDispatch()
  const collect = useSelector(dataSelector.getViewer)
  const [active, setActive] = useState(false)

  // __EFFECTS <React.Hooks>
  useEffect(() => {
    if (collect) setActive(true)
  }, [collect])

  // __FUNCTIONS
  const handleClose = useCallback(() => {
    setActive(false)

    setTimeout(() => {
      let action = dataActions.setViewer(void 0)
      dispatch(action)
    }, 410)
  }, [])

  // __RENDER
  return (
    <CSSTransition
      className='ui--viewer'
      in={active}
      timeout={400}
      unmountOnExit={true}
      onEnter={() => scrollOff(true)}
      onExited={() => scrollOff(false)}
    >
      <div className='ui--viewer'>
        <div className='ui--viewer-container'>
          <button className='btn btn-close' onClick={handleClose}>
            <span className='icon bi bi-x'></span>
          </button>

          <img className='ui--viewer-cover' src='/static/imgs/pic-2.jpg' />

          <InfoComponent data={collect} />
        </div>
      </div>
    </CSSTransition>
  )
}
