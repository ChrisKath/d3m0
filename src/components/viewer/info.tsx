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
          <code className='code value'>{useFormat(data.updatedAt)}</code>
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
  )
}
