import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginRegister from '../components/icons/LoginRegister.vue'
import ForgotPassword from '../components/icons/ForgotPassword.vue'
import MovieList from '../components/icons/MovieList.vue'
import BesteFilme from '../components/icons/BesteFilme.vue'         // ✅ Beste Filme
import FilmeBewerten from '../components/icons/FilmeBewerten.vue'   // ✅ Filme bewerten
import AktuelleSerienView from '../views/AktuelleSerienView.vue'    // ✅ Serienseite

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/auth', name: 'auth', component: LoginRegister },
    { path: '/forgot-password', name: 'forgot-password', component: ForgotPassword },
    { path: '/movies', name: 'movies', component: MovieList },
    { path: '/filme', name: 'beste-filme', component: BesteFilme },
    { path: '/filme-bewerten', name: 'filme-bewerten', component: FilmeBewerten },
    { path: '/aktuelle-serien', name: 'aktuelle-serien', component: AktuelleSerienView }, // ✅ NEU
  ],
})

export default router
