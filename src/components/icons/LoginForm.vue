<template>
  <form @submit.prevent="submitLogin" class="login-form">
    <input v-model="loginEmail" type="email" placeholder="E-Mail-Adresse" required />
    <input v-model="loginPassword" type="password" placeholder="Passwort" required />
    <button :class="buttonClass" type="submit">{{ buttonLabel }}</button>
  </form>
  <p v-if="loginError" class="error-message">{{ loginError }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { loginEmail, loginPassword, handleLogin } from '../../api'

const props = defineProps({
  buttonClass: { type: String, default: '' },
  buttonLabel: { type: String, default: 'Login' },
})

const emit = defineEmits(['login-success'])

const loginError = ref('')

async function submitLogin() {
  try {
    await handleLogin()
    loginError.value = ''
    emit('login-success')
  } catch (e) {
    loginError.value = 'Login fehlgeschlagen'
    loginPassword.value = ''
  }
}
</script>

<style scoped>
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

.error-message {
  color: red;
  margin-top: 0.5rem;
}
</style>
