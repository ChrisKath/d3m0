import { useSelector, useDispatch } from 'react-redux'
import { getDate } from '@/libs/firebase'

export function CollectComponent() {
  // __STATE <React.Hooks>
  const dispatch = useDispatch()
  const store = useSelector((state) => state['APP.DATA']['collects'])

  // __FUNCTION
  const getter = (input) => input.orderBy('order').slice(0, 4)

  const viewItem = ({ id }) => {
    dispatch({
      type: 'SET_PREVIEW',
      payload: {
        active: true,
        value: id
      }
    })

    // history.push({ search: `?cid=${id}` })
  }

  // __RENDER
  return (
    <div className='ui--index-collect'>
      <div className='ui--context'>
        <div className='ui--context-column col-1'>
          <h3 className='context-title-h3'>collects</h3>
          <h1 className='context-title-h1'>portfolio</h1>
          <p className='context-desc'>
            It doesn't matter how great your product or service is if your copy does not captivate your audience.
          </p>
        </div>

        <div className='ui--context-column col-2'>
          <ul className='content'>
            {getter(store).map((item, index) => (
              <li className='item' key={index} onClick={() => viewItem(item)}>
                <img className='poster' src='/static/imgs/pic-2.jpg' />
                <div className='type'>{item.type.label}</div>
                <div className='info'>
                  <h4 className='info-h4'>{getDate(item)}</h4>
                  <h2 className='info-h2'>{item.title}</h2>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
