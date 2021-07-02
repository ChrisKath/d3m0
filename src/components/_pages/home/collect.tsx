import { useFormat } from '@/libs/moment'
import { useSelector, dataSelector } from '@/store'

export function CollectComponent() {
  // __STATE <React.Hooks>
  const collects = useSelector(dataSelector.getCollects)

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
            {collects.map((collect) => (
              <li className='item' key={collect.id}>
                <img className='poster' src='/static/imgs/pic-2.jpg' />
                <div className='type'>{collect.type}</div>
                <div className='info'>
                  <h4 className='info-h4'>{useFormat(collect.updatedAt)}</h4>
                  <h2 className='info-h2'>{collect.title}</h2>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
