import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

// Komponenten
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginRegister from '../components/icons/LoginRegister.vue'
import ForgotPassword from '../components/icons/ForgotPassword.vue'
import MovieList from '../components/icons/MovieList.vue'
import BesteFilme from '../components/icons/BesteFilme.vue'
import FilmeBewerten from '../components/icons/FilmeBewerten.vue'
import SerienListe from '../components/icons/SerienListe.vue'
import KinoView from '../components/icons/KinoView.vue'
import SucheView from '../views/SucheView.vue'
import MeineBewertungen from '../components/icons/MeineBewertungen.vue' // ✅ Bewertete Filme
import NewsView from '../views/NewsView.vue'

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
    { path: '/meine-bewertungen', name: 'meine-bewertungen', component: MeineBewertungen }, // ✅ Neue Route
    { path: '/serien', name: 'serien', component: SerienListe },
    { path: '/kino', name: 'kino', component: KinoView },
    { path: '/suche', name: 'suche', component: SucheView },
    { path: '/news', name: 'news', component: NewsView }
  ]
})
router.beforeEach((to, _from, next) => {
  const auth = useAuthStore()
  if (!auth.isLoggedIn && to.path !== '/auth' && to.path !== '/forgot-password') {
    next('/auth')
  } else {
    next()
  }
})

export default router
