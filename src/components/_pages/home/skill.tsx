import { useSelector, dataSelector } from '@/store'

export function SkillComponent() {
  // __STATE <React.Hooks>
  const skills = useSelector(dataSelector.getSkills)

  // __RENDER
  return (
    <div className='ui--home-skill rows'>
      <div className='ui--context rtl'>
        <div className='ui--context-column col-1'>
          <h4 className='h4'>creative works</h4>
          <h1 className='h1'>skills</h1>
          <div className='desc'>
            It doesn't matter how great your product or service is if your copy does not captivate your audience.
          </div>

          <a className='btn btn-href'>
            <span className='text'>view all</span>
            <span className='icon bi bi-arrow-right'></span>
          </a>
        </div>

        <div className='ui--context-column col-2'>
          <ul className='skills'>
            {skills.map((skill) => (
              <li className='li' key={skill.id}>
                <div className='label'>{skill.label}</div>
                <code className='code'>{skill.mastery}%</code>
                <div className='desc'>{skill.description}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
