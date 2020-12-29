import { useState, useEffect } from 'react'

export default function BackToTopComponent () {
  // __STATE <React.Hooks>
  const [ active, setActive ] = useState(false)

  // __FUNCTION
  const activeClass = (active ? ' active' : '')

  const backToTop = () => {
    let y = window.scrollY
    if (y > 0) {
      window.requestAnimationFrame(backToTop)
      window.scrollTo(0, y - y / 14)
    }
  }

  const setScrollListener = () => {
    let screenHeight = (window.innerHeight / 2)
    window.addEventListener('scroll', () => {
      setActive(window.scrollY > screenHeight)
    }, false)
  }

  // __MOUNTED <React.Hooks>
  useEffect(() => {
    setScrollListener()
  }, [])

  // __RENDER
  return (
    <div className={`ui--backtotop${activeClass}`}>
      <button className="btn btn-normal" onClick={backToTop}>
        <svg className="icon bi bi-arrow-up-short" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
        </svg>
      </button>
    </div>
  )
}
