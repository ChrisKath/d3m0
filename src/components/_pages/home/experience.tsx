// import { useFormat } from '@/libs/moment'
import { useSelector, dataSelector } from '@/store'

export function ExperienceComponent() {
  // __STATE <React.Hooks>
  const experiences = useSelector(dataSelector.getExperiences)

  // __RENDER
  return (
    <div className='ui--index-experience'>
      <div className='ui--context'>
        <div className='ui--context-column col-1'>
          <h3 className='context-title-h3'>working with</h3>
          <h1 className='context-title-h1'>experiences</h1>
          <p className='context-desc'>
            It doesn't matter how great your product or service is if your copy does not captivate your audience.
          </p>
        </div>

        <div className='ui--context-column col-2'>
          <ul className='content'>
            {experiences.map((experience) => (
              <li className='item' key={experience.id}>
                <span className='icon bi bi-calendar-week'></span>

                <div className='title'>
                  <h6 className='title-h6'>{experience.duration}</h6>
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
