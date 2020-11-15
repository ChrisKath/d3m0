import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'index' }
  },

  {
    path: '/index',
    name: 'index',
    // route level code-splitting
    // this generates a separate chunk (index.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "index" */ '@/pages/Index/Index.vue')
  },

  {
    path: '/collect',
    name: 'collect',
    component: () => import(/* webpackChunkName: "collect" */ '@/pages/Collect/Index.vue')
  }
]

export default routes
