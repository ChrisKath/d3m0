import { useMemo } from 'react'
import { format } from 'date-fns'
import { NextLink } from '@/components'
import { Experiences } from '@/constants'
import type { Duration } from '@/types/data'

export function ExperienceComponent() {
  // __STATE <React.Hooks>
  const experiences = useMemo(() => Experiences, [])

  // __FUNCTIONS
  const getDura = ({ from, to }: Duration): string => {
    from = format(new Date(from), 'MMM yyyy')
    to = to ? format(new Date(to), 'MMM yyyy') : 'NOW'
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

          <NextLink className='btn btn-secondary btn-href' to='/experience'>
            <span className='text'>view all</span>
            <span className='icon bi bi-arrow-right'></span>
          </NextLink>
        </div>

        <div className='ui--context-column col-2'>
          <ul className='experiences'>
            {experiences.map((record) => (
              <li className='li' key={record.id}>
                <span className='icon bi bi-calendar-week'></span>

                <div className='title'>
                  <h6 className='title-h6'>{getDura(record.duration)}</h6>
                  <h5 className='title-h5'>{record.company}</h5>
                  <h3 className='title-h3'>{record.title}</h3>
                </div>

                <div className='desc'>{record.description}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
