<template>
  <header class="navbar">
    <div class="navbar-left">
      <h1 class="brand">TALIMAH.<span class="highlight">MOVIES</span></h1>
      <nav class="nav-links">
        <div class="menu-wrapper">
          <button @click="toggleFilmeMenu" class="nav-button">Filme</button>
          <div v-if="showFilmeMenu" class="dropdown">
            <RouterLink to="/filme" @click="showFilmeMenu = false">Beste Filme</RouterLink>
            <RouterLink to="/filme-bewerten" @click="showFilmeMenu = false"
            >Filme bewerten</RouterLink
            >
          </div>
        </div>
        <div class="menu-wrapper">
          <button @click="toggleSerienMenu" class="nav-button">Serien</button>
          <div v-if="showSerienMenu" class="dropdown">
            <RouterLink to="/serien" @click="showSerienMenu = false">Serienliste</RouterLink>
          </div>
        </div>
        <RouterLink to="/news">News</RouterLink>
        <RouterLink to="/kino">Kino</RouterLink>
        <RouterLink to="/movies">Filmliste</RouterLink>
        <RouterLink to="/meine-bewertungen">Meine Bewertungen</RouterLink>
      </nav>
    </div>

    <div class="navbar-right">
      <div class="search-box">
        <span class="icon">🔍</span>
        <input
          v-model="searchTerm"
          @keyup.enter="goToSearch"
          type="text"
          placeholder="Filme, Serien, Stars, Kinos..."
        />
      </div>

      <div class="login-wrapper" @click="toggleLoginMenu">
        <img
          src="https://www.svgrepo.com/download/508699/user-circle.svg"
          alt="Login"
          class="login-icon"
        />
        <div v-if="showLogin" class="login-dropdown" @click.stop>
          <div class="login-header">Anmelden</div>
          <div class="login-quote">
            „Bewerte Filme, entdecke Geschichten – mit Talimah.Movies wird jeder Klick zum
            Kinoerlebnis.“
          </div>
          <LoginForm button-label="Anmelden" />
          <RouterLink to="/forgot-password" class="login-link">Passwort vergessen?</RouterLink>
          <RouterLink to="/auth?mode=register" class="login-register">Registrieren</RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import LoginForm from './LoginForm.vue'
const router = useRouter()
const showLogin = ref(false)
const showFilmeMenu = ref(false)
const showSerienMenu = ref(false)
const searchTerm = ref('')

function toggleLoginMenu() {
  showLogin.value = !showLogin.value
}
function toggleFilmeMenu() {
  showFilmeMenu.value = !showFilmeMenu.value
}
function toggleSerienMenu() {
  showSerienMenu.value = !showSerienMenu.value
}

function goToSearch() {
  if (searchTerm.value.trim()) {
    router.push(`/suche?q=${encodeURIComponent(searchTerm.value.trim())}`)
    searchTerm.value = ''
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2b2236;
  padding: 1rem 2rem;
  color: white;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  flex-wrap: wrap;
}
.brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}
.highlight {
  color: #ff6b6b;
}
.navbar-left {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  position: relative;
}
.nav-button {
  background: none;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
}
.nav-button:hover {
  color: #ff6b6b;
}
.dropdown {
  background: white;
  color: black;
  position: absolute;
  top: 2.5rem;
  left: 0;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 999;
}
.dropdown a {
  text-decoration: none;
  color: #2b2236;
  font-weight: bold;
}
.dropdown a:hover {
  color: #ff6b6b;
}
.navbar-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.search-box {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 4px;
  padding: 0.3rem 0.6rem;
  width: 250px;
}
.search-box input {
  border: none;
  outline: none;
  font-size: 0.9rem;
  flex: 1;
  padding-left: 0.5rem;
}
.icon {
  color: #666;
  font-size: 1rem;
}
.login-wrapper {
  position: relative;
  cursor: pointer;
}
.login-icon {
  width: 28px;
  height: 28px;
  filter: brightness(0) invert(1);
  border-radius: 50%;
}
.login-dropdown {
  position: absolute;
  top: 40px;
  right: 0;
  width: 300px;
  background: white;
  color: #2b2236;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  z-index: 999;
}
.login-header {
  font-weight: bold;
  background-color: #ff6b6b;
  color: white;
  padding: 0.3rem 0.7rem;
  border-radius: 3px;
  font-size: 0.9rem;
}
.login-quote {
  font-size: 0.85rem;
  margin: 0.7rem 0 1rem;
  font-style: italic;
}
.login-form {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
.login-form input {
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem;
}
.login-form button {
  padding: 0.7rem;
  background-color: #2b2236;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
}
.login-link,
.login-register {
  display: block;
  text-align: center;
  margin-top: 0.7rem;
  font-size: 0.85rem;
  text-decoration: none;
  color: #2b2236;
}
.login-link:hover,
.login-register:hover {
  color: #ff6b6b;
  text-decoration: underline;
}
.error-message {
  color: red;
  margin-top: 0.5rem;
}
</style>
