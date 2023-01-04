import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { appSelector } from '@/store'
import { NextLink } from '../next-link'
import cls from 'classnames'

export function HeaderComponent() {
  // __STATE <React.Hooks>
  const [sticky, setSticky] = useState(false)
  const externals = useSelector(appSelector.getExternals)

  // __EFFECTS <React.Hooks>
  useEffect(() => {
    function listener(): void {
      let val = window.scrollY > 64
      setSticky(val)
    }

    listener()
    addEventListener('scroll', listener)
  }, [])

  // __RENDER
  return (
    <header className={cls('ui--header', { sticky })}>
      <div className='ui--header-container'>
        <div className='ui--header-logo'>
          <NextLink to='/home'>
            unset <span className='color'>logo</span>
          </NextLink>
        </div>

        <div className='ui--header-contact'>
          <NextLink className='btn btn-contact' to='tel:+66946040222' useLink>
            <span className='icon bi bi-phone'></span>
            <span className='text'>(+66) 94 604 0222</span>
          </NextLink>

          <NextLink className='btn btn-contact' to='mailto:pinn.project@outlook.com' useLink>
            <span className='icon bi bi-envelope'></span>
            <span className='text'>pinn.project@outlook.com</span>
          </NextLink>

          <NextLink className='btn btn-primary btn-follow' to={externals.facebook} target='_blank' rel='external' useLink>
            <span className='icon bi bi-facebook'></span>
          </NextLink>

          <NextLink className='btn btn-primary btn-follow' to={externals.twitter} target='_blank' rel='external' useLink>
            <span className='icon bi bi-twitter'></span>
          </NextLink>
        </div>
      </div>
    </header>
  )
}
