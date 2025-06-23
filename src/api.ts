// 📁 src/services/api-komplett.ts
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useAuthStore } from './stores/auth.ts'

// Axios-Konfiguration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://filme-check-liste-vb1c.onrender.com',
})
// Füge das Token automatisch zu allen Requests hinzu
api.interceptors.request.use((config) => {
  const store = useAuthStore()
  if (store.token) {
    config.headers = config.headers || {}
    ;(config.headers as any).Authorization = `Bearer ${store.token}`
  }
  return config
})

// 💾 Login & Registrierung
export const loginEmail = ref('')
export const loginPassword = ref('')
export const registerUsername = ref('')
export const registerEmail = ref('')
export const registerPassword = ref('')

export async function handleRegister() {
  try {
    const response = await api.post('/auth/register', {
      username: registerUsername.value,
      email: registerEmail.value,
      password: registerPassword.value,
    })
    console.log('✅ Registrierung erfolgreich:', response.data)
  } catch (error) {
    console.error('❌ Registrierung fehlgeschlagen:', error)
  }
}

export async function handleLogin() {
  try {
    const response = await api.post('/auth/login', {
      email: loginEmail.value,
      password: loginPassword.value,
    })
    console.log('✅ Login erfolgreich:', response.data)
    const store = useAuthStore()
    if (response.data && response.data.token) {
      store.setToken(response.data.token)
    }
  } catch (error) {

    console.error('❌ Login fehlgeschlagen:', error)
  }
}

// ⭐ Filme bewerten
export const filmname = ref('')
export const bewertung = ref(0)
export const kommentar = ref('')
export const danke = ref(false)

export async function absendenBewertung() {
  try {
    await api.post('/movies/rating', {
      title: filmname.value,
      rating: bewertung.value,
      comment: kommentar.value,
    })

    filmname.value = ''
    bewertung.value = 0
    kommentar.value = ''
    danke.value = true

    setTimeout(() => {
      danke.value = false
    }, 4000)
  } catch (error) {
    console.error('❌ Fehler beim Absenden:', error)
  }
}

// 🎬 Filme laden
export const movies = ref([])

export async function ladeFilme() {
  try {
    const response = await api.get('/movies')
    movies.value = response.data
  } catch (error) {
    console.error('❌ Filme konnten nicht geladen werden:', error)
  }
}

onMounted(() => {
  ladeFilme()
})
