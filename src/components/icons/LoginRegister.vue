<template>
  <div class="auth-container">
    <div class="auth-box">
      <!-- Social Login Buttons -->
      <div class="social-login">
        <button class="social-button google">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
          Mit Google anmelden
        </button>

        <button class="social-button apple">
          <img src="https://www.svgrepo.com/show/303128/apple-logo.svg" alt="Apple" />
          Mit Apple anmelden
        </button>
      </div>

      <!-- Login Section -->
      <div class="auth-section" v-if="showLogin && !auth.isLoggedIn">
        <h2 class="section-title">Anmelden</h2>
        <form @submit.prevent="handleLogin">
          <input v-model="loginEmail" type="email" placeholder="E-Mail-Adresse" required />
          <input v-model="loginPassword" type="password" placeholder="Passwort" required />
          <button type="submit" class="auth-button">Login</button>
        </form>
      </div>

      <!-- Trennlinie -->
      <div class="divider"><span>oder</span></div>

      <!-- Register Section -->
      <div class="auth-section" v-if="!showLogin && !auth.isLoggedIn">
        <h2 class="section-title">Registrieren</h2>
        <form @submit.prevent="handleRegister">
          <input v-model="registerUsername" type="text" placeholder="Benutzername" required />
          <input v-model="registerEmail" type="email" placeholder="E-Mail-Adresse" required />
          <input v-model="registerPassword" type="password" placeholder="Passwort" required />
          <button type="submit" class="auth-button secondary">Registrieren</button>
        </form>
      </div>
      <div v-if="auth.isLoggedIn" class="auth-section">
        <p>Du bist eingeloggt.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '../../stores/auth'
import {
  loginEmail,
  loginPassword,
  registerUsername,
  registerEmail,
  registerPassword,
  handleLogin,
  handleRegister,
} from '../../api'


const route = useRoute()
const showLogin = ref(true)
const auth = useAuthStore()

onMounted(() => {
  if (route.query.mode === 'register') {
    showLogin.value = false
  }
})
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
  padding: 2rem;
}

.auth-box {
  width: 100%;
  max-width: 600px;
  background-color: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.section-title {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.6rem;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

.auth-button {
  padding: 0.9rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.auth-button:hover {
  background-color: #36996e;
}

.auth-button.secondary {
  background-color: #35495e;
}

.auth-button.secondary:hover {
  background-color: #2c3e50;
}

.divider {
  text-align: center;
  margin: 2rem 0;
  position: relative;
}

.divider::before,
.divider::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 40%;
  height: 1px;
  background: #ccc;
}

.divider::before {
  left: 0;
}

.divider::after {
  right: 0;
}

.divider span {
  background-color: #fff;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
  font-weight: bold;
  color: #666;
}

.social-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  gap: 0.75rem;
}

.social-button {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  width: 100%;
  max-width: 300px;
  padding: 0.6rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: white;
  font-weight: bold;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.social-button img {
  width: 20px;
  height: 20px;
}

.social-button:hover {
  background-color: #f7f7f7;
}

.social-button.google {
  border-color: #ccc;
}

.social-button.apple {
  border-color: #000;
  color: #000;
}
</style>
