import { useState, useEffect } from 'react'
import { RouterLink } from '@/components'
import { useSelector, coreSelector } from '@/store'
import { addEventListener } from '@/utils'
import cls from 'classnames'

export function HeaderComponent() {
  // __STATE <React.Hooks>
  const [sticky, setSticky] = useState(false)
  const links = useSelector(coreSelector.getLinks)

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
          <RouterLink href='/home'>
            unset <span className='color'>logo</span>
          </RouterLink>
        </div>

        <div className='ui--header-contact'>
          <a className='btn btn-contact' href='tel:+66946040222'>
            <span className='icon bi bi-phone'></span>
            <span className='text'>(+66) 94 604 0222</span>
          </a>

          <a className='btn btn-contact' href='mailto:pinn.project@outlook.com'>
            <span className='icon bi bi-envelope'></span>
            <span className='text'>pinn.project@outlook.com</span>
          </a>

          <a className='btn btn-primary btn-follow' href={links.facebook} target='_blank' rel='external'>
            <span className='icon bi bi-facebook'></span>
          </a>

          <a className='btn btn-primary btn-follow' href={links.twitter} target='_blank' rel='external'>
            <span className='icon bi bi-twitter'></span>
          </a>
        </div>
      </div>
    </header>
  )
}
