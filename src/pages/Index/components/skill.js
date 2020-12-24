import { useState } from 'react'

export default function SkillComponent () {
  // __STATE <Initial.State>
  const [ data, setData ] = useState(null)

  // __RENDER
  return (
    <div className="ui--index-skill">
      <div className="ui--context rtl">
        <div className="ui--context-column col-1">
          <h3 className="title-h3">creative works</h3>
          <h1 className="title-h1">skills</h1>
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
