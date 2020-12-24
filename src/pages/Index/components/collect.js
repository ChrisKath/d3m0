import { useState } from 'react'

export default function CollectComponent () {
  // __STATE <Initial.State>
  const [ data, setData ] = useState(null)

  // __RENDER
  return (
    <div className="ui--index-collect">
      <div className="ui--context">
        <div className="ui--context-column col-1">
          <h3 className="title-h3">collect</h3>
          <h1 className="title-h1">portfolio</h1>
          <p className="desc">
            It doesn't matter how great your product or service is if your copy does not captivate your audience.
          </p>
        </div>

        <div className="ui--context-column col-2">
          .column-2
        </div>
      </div>
    </div>
  )
}
