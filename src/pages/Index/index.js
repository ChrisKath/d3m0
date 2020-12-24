import { useState } from 'react'
import {
  CoverComponent,
  CollectComponent,
  ExperienceComponent,
  SkillComponent
} from './components'
import './style.less'

export default function IndexContainer () {
  // __STATE <Initial.State>
  const [ data, setData ] = useState(null)

  // __RENDER
  return (
    <div className="ui--index">
      <CoverComponent />
      <CollectComponent />
      <ExperienceComponent />
      <SkillComponent />
    </div>
  )
}
