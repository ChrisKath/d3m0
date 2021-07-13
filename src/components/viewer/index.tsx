import { useState, useEffect, useCallback } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useSelector, dataSelector } from '@/store'
import { viewer, scrollOff } from '@/utils'
import { InfoComponent } from './info'

export function ViewerComponent() {
  // __STATE <React.Hooks>
  const collect = useSelector(dataSelector.getViewer)
  const [active, setActive] = useState(false)

  // __EFFECTS <React.Hooks>
  useEffect(() => {
    if (collect) setActive(true)
  }, [collect])

  // __FUNCTIONS
  const handleClose = useCallback(() => {
    setActive(false)
    setTimeout(() => viewer(void 0), 404)
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

          <div className='ui--viewer-cover'>
            <img className='image' src={`/static/imgs/thumbnail/${collect?.poster}`} />
          </div>

          <InfoComponent data={collect} />
        </div>
      </div>
    </CSSTransition>
  )
}
