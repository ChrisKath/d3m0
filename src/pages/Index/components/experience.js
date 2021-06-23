import { useSelector } from 'react-redux'
import { dateFormat } from '@/utils'

export default function ExperienceComponent () {
  // __STATE <React.Hooks>
  const store = useSelector(state => state['APP.DATA']['experience'])

  // __FUNCTION
  const getter = input => input.orderBy('order')
  const getDate = ({ from, to }) => {
    let _from = dateFormat(from.toDate())
    let _to = typeof to === 'string' ? to : dateFormat(to.toDate())
    return `${_from} - ${_to}`
  }

  // __RENDER
  return (
    <div className="ui--index-experience">
      <div className="ui--context">
        <div className="ui--context-column col-1">
          <h3 className="context-title-h3">working with</h3>
          <h1 className="context-title-h1">experiences</h1>
          <p className="context-desc">
            It doesn't matter how great your product or service is if your copy does not captivate your audience.
          </p>
        </div>

        <div className="ui--context-column col-2">
          <ul className="content">
            {
              getter(store).map((item, index) => (
                <li className="item" key={index}>
                  <svg className="icon bi bi-calendar-week" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                    <path fillRule="evenodd"  d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                  </svg>

                  <div className="title">
                    <h6 className="title-h6">{ getDate(item.time) }</h6>
                    <h3 className="title-h3">{ item.label }</h3>
                  </div>

                  <div className="desc">{ item.description }</div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
