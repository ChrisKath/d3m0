import { useEffect, useRef } from 'react'

export function ParallaxComponent() {
  // __STATE <React.Hooks>
  const nodeRef = useRef<HTMLDivElement>(null)

  // __EFFECT's
  useEffect(() => {
    function listener() {
      const { current: element } = nodeRef
      if (element) {
        const { scrollY } = window
        element.style.transform = `translateY(-${scrollY / 4}px)`
      }
    }

    listener()
    addEventListener('scroll', listener)
  }, [])

  // __RENDER
  return (
    <div className='ui--parallax' ref={nodeRef}>
      <img className='image' src='/static/images/pic-3.jpg' />
      <div className='overlay'></div>
    </div>
  )
}
