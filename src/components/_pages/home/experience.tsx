import { RouterLink } from '@/components'
import { useFormat } from '@/libs/moment'
import { useSelector, dataSelector } from '@/store'
import { Duration } from '@/types/data'

export function ExperienceComponent() {
  // __STATE <React.Hooks>
  const experience = useSelector(dataSelector.getExperience)

  // __FUNCTIONS
  const getDura = ({ from, to }: Duration): string => {
    from = useFormat(from, 'MMM YYYY')
    to = to ? useFormat(to, 'MMM YYYY') : 'NOW'
    return `${from} ~ ${to}`
  }

  // __RENDER
  return (
    <div className='ui--home-experience rows'>
      <div className='ui--context'>
        <div className='ui--context-column col-1'>
          <h4 className='h4'>working with</h4>
          <h1 className='h1'>experience</h1>
          <div className='desc'>
            It doesn't matter how great your product or service is if your copy does not captivate your audience.
          </div>

          <RouterLink className='btn btn-secondary btn-href' href='/experience'>
            <span className='text'>view all</span>
            <span className='icon bi bi-arrow-right'></span>
          </RouterLink>
        </div>

        <div className='ui--context-column col-2'>
          <ul className='experiences'>
            {experience.map((exp) => (
              <li className='li' key={exp.id}>
                <span className='icon bi bi-calendar-week'></span>

                <div className='title'>
                  <h6 className='title-h6'>{getDura(exp.duration)}</h6>
                  <h5 className='title-h5'>{exp.company}</h5>
                  <h3 className='title-h3'>{exp.title}</h3>
                </div>

                <div className='desc'>{exp.description}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
