import { lazy } from 'react'
import Index from '@/pages/Index'

export default [
  {
    name: 'index',
    path: '/',
    exact: true,
    component: Index
  },
  {
    name: 'collect',
    path: '/collects',
    exact: false,
    component: lazy(() => import(/* webpackChunkName: "collect" */ '@/pages/Collect'))
  }
]
