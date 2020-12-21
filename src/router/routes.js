import { lazy } from 'react'
import Index from '@/pages/Index'

export default [
  {
    path: '/',
    name: 'index',
    exact: true,
    component: Index
  },
  {
    path: '/collects',
    name: 'collect',
    exact: false,
    component: lazy(() => import(/* webpackChunkName: "collect" */ '@/pages/Collect'))
  }
]
