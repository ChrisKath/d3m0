import { format } from 'date-fns'
import type { Collect } from '@/types'

export interface Props {
  data: Collect
  onClose?: () => void
}

export function DummyComponent({ data, onClose }: Props) {
  // __RENDER
  return (
    <div className='ui--dummy'>
      <div className='ui--dummy-container'>
        <button className='btn btn-close' onClick={onClose}>
          <span className='icon bi bi-x'></span>
        </button>

        <div className='ui--dummy-cover'>
          <img className='image' src={`/static/images/thumbnail/${data.poster}`} />
        </div>

        <div className='ui--dummy-info'>
          <div className='column col-1'>
            <h2 className='info-title'>{data.title}</h2>
            <p className='info-desc'>{data.description}</p>
          </div>

          <div className='column col-2'>
            <div className='info-date'>
              <span className='label'>created:</span>
              <code className='code value'>{format(new Date(data.updatedAt), 'PP')}</code>
            </div>

            <div className='info-type'>
              <span className='label'>type:</span>
              <code className='code value'>{data.type}</code>
            </div>

            <div className='info-tags'>
              <span className='label'>tags:</span>
              {data.tags.map((tag, idx) => (
                <code className='code value' key={idx}>
                  {tag}
                </code>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
