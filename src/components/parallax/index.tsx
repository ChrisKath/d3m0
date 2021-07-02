import { useState, useEffect } from 'react'
import { addEventListener } from '@/utils'

export function ParallaxComponent() {
  // __STATE <React.Hooks>
  const [posY, setPosY] = useState(0)

  // __EFFECTS <React.Hooks>
  useEffect(() => {
    addEventListener('scroll', () => {
      const { innerHeight, scrollY } = window
      if (scrollY < innerHeight * 1.5) {
        let val = +(scrollY / 3.25)
        setPosY(val)
      }
    })
  }, [])

  // __RENDER
  return (
    <div className='ui--parallax' style={{ transform: `translateY(-${posY}px)` }}>
      <img className='bg' src='/static/imgs/pic-3.jpg' />
      <div className='overlay'></div>
    </div>
  )
}
