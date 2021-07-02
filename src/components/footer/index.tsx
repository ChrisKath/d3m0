import { useSelector, coreSelector } from '@/store'

export function FooterComponent() {
  // __STATE <React.Hooks>
  const appVersion = useSelector(coreSelector.getAppVersion)

  // __RENDER
  return (
    <footer className='ui--footer'>
      <div className='ui--footer-container'>
        <p className='p1'>Got't Patiphat, Web Profile;</p>
        <p className='p2'>
          {appVersion} | power by <code>NextJS</code>, <code>Vercel</code>
        </p>
      </div>
    </footer>
  )
}
