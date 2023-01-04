import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'
import { format } from 'date-fns'
import { NextLink } from '@/components'
import { Collects } from '@/constants'

export function CollectComponent() {
  // __STATE <React.Hooks>
  const router = useRouter()
  const collects = useMemo(() => Collects, [])

  // __FUNCTION's
  const handleDummy = useCallback((id: string) => {
    router.replace(
      {
        query: {
          cid: id
        }
      },
      `${router.pathname}?cid=${id}`,
      {
        scroll: false
      }
    )
  }, [])

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
          <NextLink className='btn btn-secondary btn-href' to='/collects'>
            <span className='text'>view all</span>
            <span className='icon bi bi-arrow-right'></span>
          </NextLink>
        </div>

        <div className='ui--context-column col-2'>
          <ul className='collects'>
            {collects.map((record) => (
              <li className='li' onClick={() => handleDummy(record.id)} key={record.id}>
                <img className='poster' src={`/static/images/thumbnail/${record.poster}`} />
                <div className='type'>{record.type}</div>
                <div className='info'>
                  <h5 className='h5'>{format(new Date(record.updatedAt), 'PP')}</h5>
                  <h2 className='h2'>{record.title}</h2>
                  <h6 className='h6'>{record.description}</h6>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
