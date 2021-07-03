import { useState, useEffect } from 'react'
import { addEventListener } from '@/utils'

export function ParallaxComponent() {
  // __STATE <React.Hooks>
  const [posY, setPosY] = useState(0)

  // __EFFECTS <React.Hooks>
  useEffect(() => {
    function listener(): void {
      let val = window.scrollY / 4
      setPosY(val)
    }

    listener()
    addEventListener('scroll', listener)
  }, [])

  // __RENDER
  return (
    <div className='ui--parallax' style={{ transform: `translateY(-${posY}px)` }}>
      <img className='bg' src='/static/imgs/pic-3.jpg' />
      <div className='overlay'></div>
    </div>
  )
}
