import { useSelector } from 'react-redux'
import './style.less'

export default function CollectContainer () {
  // __STATE <Initial.State>
  const store = useSelector(state => state['APP.DATA']['collects'])

  // __FUNCTION
  const getter = input => input.orderBy('order')

  // __RENDER
  return (
    <div className="ui--collect">
      .ui--collect
    </div>
  )
}