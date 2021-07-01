import { useState, useEffect } from 'react'
import { addEventListener } from '@/utils'

export function ParallaxComponent() {
  // __STATE <React.Hooks>
  const [posY, setPosY] = useState(0)

  // __MOUNTED <React.Hooks>
  useEffect(() => {
    function listener(): void {
      const { innerHeight, scrollY } = window
      if (scrollY < innerHeight * 1.5) {
        let val = parseInt(scrollY / 3.2)
        setPosY(val)
      }
    }

    addEventListener('scroll', listener)
  }, [])

  // __RENDER
  return (
    <div className='ui--parallax' style={{ '--pos-y': `${posY}px` }}>
      <img className='picture' src='/static/imgs/pic-3.jpg' />
      <div className='overlay'></div>
    </div>
  )
}
