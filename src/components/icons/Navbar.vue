<template>
  <header class="navbar">
    <div class="navbar-left">
      <h1 class="brand">TALIMAH.<span class="highlight">MOVIES</span></h1>
      <nav class="nav-links">
        <div class="menu-wrapper">
          <button @click="toggleFilmeMenu" class="nav-button">Filme</button>
          <div v-if="showFilmeMenu" class="dropdown">
            <RouterLink to="/filme" @click="showFilmeMenu = false">Beste Filme</RouterLink>
            <RouterLink to="/filme-bewerten" @click="showFilmeMenu = false">Filme bewerten</RouterLink>
          </div>
        </div>
        <RouterLink to="/serien">Serien</RouterLink>
        <RouterLink to="/news">News</RouterLink>
        <RouterLink to="/kino">Kino</RouterLink>
        <RouterLink to="/movies">Filmliste</RouterLink>
      </nav>
    </div>

    <div class="navbar-right">
      <div class="search-box">
        <span class="icon">🔍</span>
        <input type="text" placeholder="Filme, Serien, Stars, Kinos..." />
      </div>

      <div class="login-wrapper" @click="toggleLoginMenu">
        <img src="https://www.svgrepo.com/download/508699/user-circle.svg" alt="Login" class="login-icon" />
        <div v-if="showLogin" class="login-dropdown" @click.stop>
          <div class="login-header">Anmelden</div>
          <div class="login-quote">
            „Bewerte Filme, entdecke Geschichten – mit Talimah.Movies wird jeder Klick zum Kinoerlebnis.“
          </div>

          <div class="social-login-buttons">
            <button class="social-button google">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
              Mit Google anmelden
            </button>
            <button class="social-button apple">
              <img src="https://www.svgrepo.com/show/303128/apple-black-logo.svg" alt="Apple" />
              Mit Apple anmelden
            </button>
          </div>

          <form @submit.prevent="handleLogin" class="login-form">
            <input v-model="username" type="text" placeholder="Benutzername" required />
            <input v-model="password" type="password" placeholder="Passwort" required />
            <button type="submit">Anmelden</button>
          </form>

          <RouterLink to="/forgot-password" class="login-link">Passwort vergessen?</RouterLink>
          <RouterLink to="/auth?mode=register" class="login-register">Registrieren</RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showLogin = ref(false)
const showFilmeMenu = ref(false)
const username = ref('')
const password = ref('')

function toggleLoginMenu() {
  showLogin.value = !showLogin.value
}

function toggleFilmeMenu() {
  showFilmeMenu.value = !showFilmeMenu.value
}

function handleLogin() {
  if (!username.value || !password.value) {
    alert('Bitte Benutzername und Passwort eingeben.')
    return
  }

  // Platz für spätere API-Anbindung
  console.log('Login-Daten:', {
    username: username.value,
    password: password.value,
  })

  alert(`Willkommen zurück, ${username.value}!`)
  // Nach Login das Dropdown schließen
  showLogin.value = false

  // Felder leeren
  username.value = ''
  password.value = ''
}
</script>

<style scoped>
/* Dein gesamter CSS bleibt wie er ist (bereits enthalten in deiner Nachricht) */
</style>
