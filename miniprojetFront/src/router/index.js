import { createRouter, createWebHistory } from 'vue-router'
import Navbar from '@/views/Navbar.vue'
import Home from '@/views/Home.vue'
import StudentsView from '@/views/Students/View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Home',
      name: 'home',
      component: Home
    },
    {
      path: '/students',
      name: 'students',
      component: StudentsView
    },
    {
      path: '/navbar',
      name: 'navbar',
      component: Navbar
    }
  ]
})

export default router
