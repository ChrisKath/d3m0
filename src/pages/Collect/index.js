import { useSelector } from 'react-redux'
import { ItemComponent } from './components'
import './style.less'

export default function CollectContainer () {
  // __STATE <React.Hooks>
  const store = useSelector(state => state['APP.DATA']['collects'])

  // __FUNCTION
  const getter = input => input.orderBy('order')

  // __RENDER
  return (
    <div className="ui--collect">
      <div className="ui--router-page">
        <h2 className="title">collects</h2>
      </div>

      <div className="ui--collect-content">
        {
          getter(store).map((item, index) => (
            <ItemComponent key={index} data={item} />
          ))
        }
      </div>
    </div>
  )
}