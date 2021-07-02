import { useState, useEffect, useCallback } from 'react'
import { addEventListener } from '@/utils'
import cls from 'classnames'

export function BackToTopComponent() {
  // __STATE <React.Hooks>
  const [active, setActive] = useState(false)

  // __EFFECTS <React.Hooks>
  useEffect(() => {
    const screenHeight = window.innerHeight / 2
    function listener(): void {
      setActive(window.scrollY > screenHeight)
    }

    addEventListener('scroll', listener)
  }, [])

  // __FUNCTIONS
  const handleBackToTop = useCallback(() => {
    const y = window.scrollY
    if (y > 0) {
      window.requestAnimationFrame(handleBackToTop)
      window.scrollTo(0, y - y / 14)
    }
  }, [])

  // __RENDER
  return (
    <div className={cls('ui--backtotop', { active })}>
      <button className='btn btn-normal' onClick={handleBackToTop}>
        <span className='icon bi bi-arrow-up-short'></span>
      </button>
    </div>
  )
}
