import { StrictMode, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { getCollection } from '@/service'
import { storage } from '@/store/actions'
import RouterView from '@/router'
import {
  HeaderComponent,
  FooterComponent,
  ParallaxComponent
} from '@/components'

export default function Application () {
  const dispatch = useDispatch()

  // __FUNCTION
  const onFetch = async () => {
    const collects    = await getCollection('collects')
    const experience  = await getCollection('experience')
    const skills      = await getCollection('skills')

    dispatch(storage.initStorage({
      collects, experience, skills
    }))
  }

  // __MOUNTED <React.Hooks>
  useEffect(() => {
    onFetch()
  }, [])

  // __RENDER
  return (
    <StrictMode>
      <BrowserRouter>
        <ParallaxComponent />
        <HeaderComponent />
        <RouterView />
        <FooterComponent />
      </BrowserRouter>
    </StrictMode>
  )
}
