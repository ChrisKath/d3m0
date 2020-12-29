import {
  CoverComponent,
  CollectComponent,
  ExperienceComponent,
  SkillComponent
} from './components'
import './style.less'

export default function IndexContainer () {
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
