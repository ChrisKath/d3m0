import { useState } from 'react'
import { getDate, getTags } from '@/libs/firebase'

export function InfoComponent(props: any) {
  // __STATE <React.Hooks>
  const [info] = useState(props.info)

  // __FUNCTION
  const hasInfo = info && info !== null

  // __RENDER
  if (!hasInfo) return null
  return (
    <div className='ui--preview-info'>
      <div className='column col-1'>
        <h2 className='info-title'>{info.title}</h2>
        <p className='info-desc'>{info.description}</p>
      </div>

      <div className='column col-2'>
        <div className='info-date'>
          <span className='label'>created:</span>
          <span className='value'>{getDate(info)}</span>
        </div>

        <div className='info-type'>
          <span className='label'>type:</span>
          <span className='value'>{info.type.label}</span>
        </div>

        <div className='info-tags'>
          <span className='label'>tags:</span>
          <span className='value'>{getTags(info)}</span>
        </div>
      </div>
    </div>
  )
}
