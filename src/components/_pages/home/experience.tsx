import { useFormat } from '@/libs/moment'
import { useSelector, dataSelector } from '@/store'
import { Duration } from '@/types/data'

export function ExperienceComponent() {
  // __STATE <React.Hooks>
  const experiences = useSelector(dataSelector.getExperiences)

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
          <h1 className='h1'>experiences</h1>
          <div className='desc'>
            It doesn't matter how great your product or service is if your copy does not captivate your audience.
          </div>

          <a className='btn btn-href'>
            <span className='text'>view all</span>
            <span className='icon bi bi-arrow-right'></span>
          </a>
        </div>

        <div className='ui--context-column col-2'>
          <ul className='experiences'>
            {experiences.map((experience) => (
              <li className='li' key={experience.id}>
                <span className='icon bi bi-calendar-week'></span>

                <div className='title'>
                  <h6 className='title-h6'>{getDura(experience.duration)}</h6>
                  <h5 className='title-h5'>{experience.company}</h5>
                  <h3 className='title-h3'>{experience.title}</h3>
                </div>

                <div className='desc'>{experience.description}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
