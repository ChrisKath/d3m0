import { useState, useEffect } from 'react'
import pic from '@img/pic-3.jpg'

export default function ParallaxComponent () {
  // __STATE <Initial.State>
  const [ posY, setPosY ] = useState(0)

  // __FUNCTION
  const setEventListener = () => {
    window.addEventListener('scroll', () => {
      let { innerHeight, scrollY } = window
      if (scrollY < innerHeight) {
        let val = parseInt(scrollY / 3.2)
        setPosY(val)
      }
    }, false)
  }

  // __MOUNTED <React.Hooks>
  useEffect(() => {
    setEventListener()
  }, [])
  
  // __RENDER
  return (
    <div className="ui--parallax" style={{ '--pos-y': `-${posY}px` }}>
      <img className="picture" src={pic} />
      <div className="overlay"></div>
    </div>
  )
}
