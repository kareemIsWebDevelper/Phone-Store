import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('../views/Store.vue')
    },
    {
      path: '/Redmi',
      name: 'Redmi',
      component: () => import('../views/Redmi.vue')
    },
    {
      path: '/Realme',
      name: 'Realme',
      component: () => import('../views/Realme.vue')
    },
    {
      path: '/Samsung',
      name: 'Samsung',
      component: () => import('../views/Samsung.vue')
    },
    {
      path: '/iPhone',
      name: 'iPhone',
      component: () => import('../views/iPhone.vue')
    },
    {
      path: '/details/:id',
      name: 'details',
      props: true,
      component: () => import('../views/Details.vue')
    }
  ]
})

export default router
