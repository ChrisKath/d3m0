import { useSelector, dataSelector } from '@/store'

export function SkillComponent() {
  // __STATE <React.Hooks>
  const skills = useSelector(dataSelector.getSkills)

  // __RENDER
  return (
    <div className='ui--index-skill'>
      <div className='ui--context rtl'>
        <div className='ui--context-column col-1'>
          <h3 className='context-title-h3'>creative works</h3>
          <h1 className='context-title-h1'>skills</h1>
          <p className='context-desc'>
            It doesn't matter how great your product or service is if your copy does not captivate your audience.
          </p>
        </div>

        <div className='ui--context-column col-2'>
          <ul className='content'>
            {skills.map((skill) => (
              <li className='item' key={skill.id}>
                <div className='label'>{skill.label}</div>
                <div className='desc'>{skill.description}</div>
                <div className='value'>{skill.mastery}%</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
