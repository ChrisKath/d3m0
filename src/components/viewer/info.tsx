import { useFormat } from '@/libs/moment'
import { Collect } from '@/types'

export interface Props {
  data?: Collect;
}

export function InfoComponent({ data }: Props) {
  // __RENDER
  if (!data) return null
  return (
    <div className='ui--viewer-info'>
      <div className='column col-1'>
        <h2 className='info-title'>{data.title}</h2>
        <p className='info-desc'>{data.description}</p>
      </div>

      <div className='column col-2'>
        <div className='info-date'>
          <span className='label'>created:</span>
          <span className='value'>{useFormat(data.updatedAt)}</span>
        </div>

        <div className='info-type'>
          <span className='label'>type:</span>
          <span className='value'>{data.type}</span>
        </div>

        <div className='info-tags'>
          <span className='label'>tags:</span>
          <span className='value'>{data.tags.join(', ')}</span>
        </div>
      </div>
    </div>
  )
}
