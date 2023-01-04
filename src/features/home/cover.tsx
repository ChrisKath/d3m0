import { useSelector } from 'react-redux'
import { appSelector } from '@/store'

export function CoverComponent() {
  // __STATE <React.Hooks>
  const externals = useSelector(appSelector.getExternals)

  // __RENDER
  return (
    <div className='ui--home-cover'>
      <h4 className='title'>fullstack web developer</h4>

      <div className='avatar'>
        <img className='img' src='/static/images/avatar.png' alt='avatar' />
      </div>

      <h2 className='sayhi'>Hello, i am</h2>
      <h1 className='name'>Got't Patiphat</h1>
      <p className='desc'>
        Web Developer and UI/UX Designer with 4 years of experience.
        <br />I enjoy learning about new technologies.
      </p>

      <div className='actions'>
        <a className='btn btn-primary btn-resume' href={externals.cv} rel='external' target='_blank'>
          <span className='icon bi bi-download'></span>
          <span className='text'>Download Resume</span>
        </a>

        <a className='btn btn-primary btn-github' href={externals.github} rel='external' target='_blank'>
          <span className='icon bi bi-github'></span>
        </a>
      </div>
    </div>
  )
}
