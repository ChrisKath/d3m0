import { useSelector } from 'react-redux'

export function SkillComponent() {
  // __STATE <React.Hooks>
  const store = useSelector((state) => state['APP.DATA']['skills'])

  // __FUNCTION
  const getter = (input) => input.orderBy('order')

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
            {getter(store).map((item, index) => (
              <li className='item' key={index}>
                <div className='label'>{item.label}</div>
                <div className='desc'>description</div>
                <div className='value'>{item.value}%</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
