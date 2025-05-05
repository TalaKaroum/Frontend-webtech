import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginRegister from '../components/icons/LoginRegister.vue'
import ForgotPassword from '../components/icons/ForgotPassword.vue'
import MovieList from '../components/icons/MovieList.vue' // ✅ NEU importiert

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/auth',
      name: 'auth',
      component: LoginRegister,
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPassword,
    },
    {
      path: '/movies',             // ✅ NEU: Route für MovieList
      name: 'movies',
      component: MovieList,
    },
  ],
})

export default router
