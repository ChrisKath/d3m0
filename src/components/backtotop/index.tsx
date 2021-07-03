import { useState, useEffect, useCallback } from 'react'
import { addEventListener } from '@/utils'
import cls from 'classnames'

export function BackToTopComponent() {
  // __STATE <React.Hooks>
  const [active, setActive] = useState(false)

  // __EFFECTS <React.Hooks>
  useEffect(() => {
    function listener(): void {
      const { innerHeight, scrollY } = window
      setActive(scrollY > innerHeight / 2)
    }

    listener()
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
      <button className='btn btn-primary' onClick={handleBackToTop}>
        <span className='icon bi bi-arrow-up-short'></span>
      </button>
    </div>
  )
}
