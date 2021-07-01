import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getDate, getTags } from '@/libs/firebase'

export function ItemComponent(props: any) {
  // __STATE <React.Hooks>
  const dispatch = useDispatch()
  const [data, setData] = useState(props.data)

  // __FUNCTION
  const viewItem = () => {
    dispatch({
      type: 'SET_PREVIEW',
      payload: {
        active: true,
        value: data.id
      }
    })

    // history.push({ search: `?cid=${data.id}` })
  }

  // __RENDER
  return (
    <div className='ui--collect-item'>
      <img className='poster' src='/static/imgs/pic-2.jpg' loading='lazy' onClick={viewItem} />
      <div className='type'>{data.type.label}</div>
      <div className='content'>
        <h4 className='content-date'>{getDate(data)}</h4>
        <h2 className='content-title'>{data.title}</h2>
        <p className='content-desc'>{data.description}</p>
        <p className='content-tags'>{getTags(data)}</p>
      </div>
    </div>
  )
}
