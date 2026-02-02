import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Login from '@/views/auth/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/auth/login',
      name: 'Login',
      component: Login,
    },
  ],
})

export default router
