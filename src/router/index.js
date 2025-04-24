import { createRouter, createWebHistory } from 'vue-router'
import Payment from '../pages/Payment.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'payment',
      component: Payment
    },
    {
      path: '/thank-you',
      name: 'thank-you',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/ThankYou.vue')
    }
  ]
})

export default router
