import { Home } from '@/features/home'

export default function HomeContainer() {
  // __RENDER
  return (
    <div className='ui--home-container'>
      <Home.Cover />
      <Home.Collect />
      <Home.Experience />
      <Home.Skill />
    </div>
  )
}
