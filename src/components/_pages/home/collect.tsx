import { useCallback } from 'react'
import { RouterLink } from '@/components'
import { useFormat } from '@/libs/moment'
import { useSelector, dataSelector } from '@/store'
import { viewer } from '@/utils'

export function CollectComponent() {
  // __STATE <React.Hooks>
  const collects = useSelector(dataSelector.getCollects)

  // __FUNCTIONS
  const handleViewer = useCallback(viewer, [])

  // __RENDER
  return (
    <div className='ui--home-collect rows'>
      <div className='ui--context'>
        <div className='ui--context-column col-1'>
          <h4 className='h4'>collects</h4>
          <h1 className='h1'>portfolio</h1>
          <div className='desc'>
            It doesn't matter how great your product or service is if your copy does not captivate your audience.
          </div>
          <RouterLink className='btn btn-secondary btn-href' href='/collects'>
            <span className='text'>view all</span>
            <span className='icon bi bi-arrow-right'></span>
          </RouterLink>
        </div>

        <div className='ui--context-column col-2'>
          <ul className='collects'>
            {collects.map((collect) => (
              <li className='li' key={collect.id} onClick={() => handleViewer(collect)}>
                <img className='poster' src={`/static/imgs/thumbnail/${collect.poster}`} />
                <div className='type'>{collect.type}</div>
                <div className='info'>
                  <h5 className='h5'>{useFormat(collect.updatedAt)}</h5>
                  <h2 className='h2'>{collect.title}</h2>
                  <h6 className='h6'>{collect.description}</h6>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
