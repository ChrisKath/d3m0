import { appSelector } from '@/store'
import { useSelector } from 'react-redux'

export function FooterComponent() {
  // __STATE <React.Hooks>
  const appVersion = useSelector(appSelector.getAppVersion)

  // __RENDER
  return (
    <footer className='ui--footer'>
      <div className='ui--footer-container'>
        <p className='p1'>Got't Patiphat, Web Profile;</p>
        <p className='p2'>
          {appVersion} | power by <code className='code'>NextJS</code>, <code className='code'>Vercel</code>
        </p>
      </div>
    </footer>
  )
}
