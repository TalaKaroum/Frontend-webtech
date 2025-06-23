// 📁 src/services/api-komplett.ts
import axios from 'axios'
import { ref, onMounted } from 'vue'

// Axios-Konfiguration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://filme-check-liste-1.onrender.com',
  withCredentials: true,
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
    await api.post('https://filme-check-liste-vb1c.onrender.com'+'/movies/rating', {
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
    const response = await api.get('https://filme-check-liste-vb1c.onrender.com'+'/movies')
    movies.value = response.data
  } catch (error) {
    console.error('❌ Filme konnten nicht geladen werden:', error)
  }
}

onMounted(() => {
  console.log("TEEEEEEST!!!!")
  ladeFilme()
})
