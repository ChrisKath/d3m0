import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  getDate,
  getTags
} from '@/utils/collect'
import pic from '@img/pic-2.jpg'

export default function ItemComponent (props) {
  // __STATE <React.Hooks>
  const dispatch  = useDispatch()
  const history   = useHistory()
  const [ data, setData ] = useState(props.data)

  // __FUNCTION
  const viewItem = () => {
    dispatch({
      type: 'SET_PREVIEW',
      payload: {
        active: true,
        value: data.id
      }
    })

    history.push({ search: `?cid=${data.id}` })
  }

  // __RENDER
  return (
    <div className="ui--collect-item">
      <img className="poster" src={pic} loading="lazy" onClick={viewItem} />
      <div className="type">{ data.type.label }</div>
      <div className="content">
        <h4 className="content-date">{ getDate(data) }</h4>
        <h2 className="content-title">{ data.title }</h2>
        <p className="content-desc">{ data.description }</p>
        <p className="content-tags">{ getTags(data) }</p>
      </div>
    </div>
  )
}
