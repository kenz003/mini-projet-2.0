import { createRouter, createWebHistory } from 'vue-router'
import Navbar from '@/views/Navbar.vue'
import Home from '@/views/Home.vue'
import StudentsView from '@/views/Students/View.vue'
import home from '@/components/home.vue';
import login from '@/components/login.vue';
import signup from '@/components/signup.vue';

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
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})

export default router
