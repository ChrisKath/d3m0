import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { scrollhidden } from '@/utils'

export default function LoaderComponent () {
  // __STATE <React.Hooks>
  const loader = useSelector(state => state['APP.ROOT']['load'])
  const boxs = Array.from(Array(10))

  // __MOUNTED <React.Hooks>
  useEffect(() => {
    scrollhidden(true)
  }, [])

  // __RENDER
  return (
    <CSSTransition
      className="ui--loader"
      in={loader[0]}
      timeout={320}
      unmountOnExit={true}
      onExited={() => scrollhidden(false)}>

      <div className="ui--loader">
        <div className="container">
          <ul className="ui--loader-box">
            { boxs.map((item, index) => <li key={index}></li>) }
          </ul>
          <i className="ui--loader-text">{ loader[1] }</i>
        </div>
      </div>

    </CSSTransition>
  )
}
