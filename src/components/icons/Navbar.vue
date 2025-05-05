<template>
  <header class="navbar">
    <div class="navbar-left">
      <h1 class="brand">TALIMAH.<span class="highlight">MOVIES</span></h1>
      <nav class="nav-links">
        <RouterLink to="/">Filme</RouterLink>
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

      <!-- Login Icon mit Dropdown -->
      <div class="login-wrapper" @click="toggleLoginMenu">
        <img
          src="https://www.svgrepo.com/download/508699/user-circle.svg"
          alt="Login"
          class="login-icon"
        />
        <div v-if="showLogin" class="login-dropdown" @click.stop>
          <div class="login-header">Anmelden</div>
          <div class="login-quote">
            „Bewerte Filme, entdecke Geschichten – mit Talimah.Movies wird jeder Klick zum Kinoerlebnis.“
          </div>

          <!-- Social Buttons -->
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

          <!-- Klassisches Login -->
          <form @submit.prevent="handleLogin" class="login-form">
            <input type="text" placeholder="Benutzername" required />
            <input type="password" placeholder="Passwort" required />
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
import { RouterLink } from 'vue-router'

const showLogin = ref(false)

function toggleLoginMenu() {
  showLogin.value = !showLogin.value
}

function handleLogin() {
  alert('Login erfolgreich (Demo)')
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
  letter-spacing: 1px;
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
  gap: 1.2rem;
  margin-left: 1rem;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: color 0.2s;
}

.nav-links a:hover {
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
  display: inline-block;
  padding: 0.3rem 0.7rem;
  border-radius: 3px;
  font-size: 0.9rem;
}

.login-quote {
  font-size: 0.85rem;
  margin: 0.7rem 0 1rem;
  font-style: italic;
}

.social-login-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.social-button {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.6rem;
  background-color: #2b2236;
  color: white;
  border: none;
  padding: 0.7rem 1rem;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;
}

.social-button:hover {
  background-color: #ff6b6b;
}

.social-button img {
  width: 20px;
  height: 20px;
  object-fit: contain;
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
</style>
