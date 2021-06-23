import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { getCollection } from '@/service'
import RouterView from '@/router'
import {
  ParallaxComponent,
  HeaderComponent,
  FooterComponent,
  PreviewComponent,
  LoaderComponent,
  BackToTopComponent
} from '@/components'

export default function Application () {
  // __STATE <React.Hooks>
  const dispatch = useDispatch()

  // __FUNCTION
  const onFetch = async () => {
    const collects    = await getCollection('collects')
    const experience  = await getCollection('experience')
    const skills      = await getCollection('skills')

    dispatch({
      type: 'INIT_STORAGE',
      payload: { collects, experience, skills }
    })

    setTimeout(() => {
      dispatch({
        type: 'SET_LOADER',
        payload: [false, '']
      })
    }, 1e3)
  }

  // __MOUNTED <React.Hooks>
  useEffect(() => {
    onFetch()
  }, [])

  // __RENDER
  return (
    <BrowserRouter>
      <ParallaxComponent />
      <HeaderComponent />
      <RouterView />
      <LoaderComponent />
      <PreviewComponent />
      <BackToTopComponent />
      <FooterComponent />
    </BrowserRouter>
  )
}
