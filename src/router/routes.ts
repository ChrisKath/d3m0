import { RouteRecordRaw } from 'vue-router'

// Include index page.
import Index from '@/views/Index/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    name: 'index',
    component: Index
  },

  {
    path: '/portfolio',
    name: 'portfolio',
    // route level code-splitting
    // this generates a separate chunk (portfolio.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "portfolio" */ '@/views/Portfolio/Index.vue')
  }
]

export default routes
