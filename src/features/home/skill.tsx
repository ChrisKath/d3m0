import { useMemo } from 'react'
import { NextLink } from '@/components'
import { Skills } from '@/constants'

export function SkillComponent() {
  // __STATE <React.Hooks>
  const skills = useMemo(() => Skills, [])

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

          <NextLink className='btn btn-secondary btn-href' to='/skills'>
            <span className='text'>view all</span>
            <span className='icon bi bi-arrow-right'></span>
          </NextLink>
        </div>

        <div className='ui--context-column col-2'>
          <ul className='skills'>
            {skills.map((record) => (
              <li className='li' key={record.id}>
                <div className='label'>{record.label}</div>
                <code className='code'>{record.mastery}%</code>
                <div className='desc'>{record.description}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
