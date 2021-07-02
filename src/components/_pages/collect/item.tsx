import { useCallback } from 'react'
import { useRouter } from 'next/router'
import { useFormat } from '@/libs/moment'
import { Collect } from '@/types'

export interface Props {
  data: Collect;
}

export function ItemComponent({ data }: Props) {
  // __STATE <React.Hooks>
  const router = useRouter()

  // __FUNCTION
  const handleViewItem = useCallback(() => {
    router.push(router.pathname + `?cid=${data.id}`)
  }, [])

  // __RENDER
  return (
    <div className='ui--collect-item'>
      <img className='poster' src='/static/imgs/pic-2.jpg' loading='lazy' onClick={handleViewItem} />
      <div className='type'>{data.type}</div>
      <div className='content'>
        <h4 className='content-date'>{useFormat(data.updatedAt)}</h4>
        <h2 className='content-title'>{data.title}</h2>
        <p className='content-desc'>{data.description}</p>
        <p className='content-tags'>{data.tags.join(', ')}</p>
      </div>
    </div>
  )
}
