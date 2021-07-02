import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { CSSTransition } from 'react-transition-group'
import { useSelector, dataSelector } from '@/store'
import { scrollOff } from '@/utils'
import { InfoComponent } from './info'

export function PreviewComponent() {
  // __STATE <React.Hooks>
  const { query, ...router } = useRouter()
  const [active, setActive] = useState(false)
  const [collectId, setCollectId] = useState('')
  const collect = useSelector((state) => dataSelector.getCollectById(state, collectId))

  // __EFFECTS <React.Hooks>
  useEffect(() => {
    const cid: any = query.cid
    if (cid) {
      setCollectId(cid)
      if (collect) setActive(true)
    } else {
      setActive(false)
      setCollectId('')
    }
  }, [query])

  // __FUNCTIONS
  const handleClose = useCallback(() => {
    setActive(false)
    router.back()
  }, [])

  // __RENDER
  return (
    <CSSTransition
      className='ui--preview'
      in={active}
      timeout={400}
      unmountOnExit={true}
      onEnter={() => scrollOff(true)}
      onExited={() => scrollOff(false)}
    >
      <div className='ui--preview'>
        <div className='ui--preview-container'>
          <div className='ui--preview-close' onClick={handleClose}>
            <span className='icon bi bi-x'></span>
          </div>

          <img className='ui--preview-cover' src='/static/imgs/pic-2.jpg' />

          <InfoComponent data={collect} />
        </div>
      </div>
    </CSSTransition>
  )
}
