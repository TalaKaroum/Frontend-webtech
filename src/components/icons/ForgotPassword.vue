<template>
  <div class="forgot-container">
    <div class="forgot-box">
      <h2>Passwort vergessen?</h2>
      <p>Gib deine E-Mail-Adresse ein, um ein neues Passwort zu setzen.</p>
      <form @submit.prevent="handleReset">
        <input v-model="email" type="email" placeholder="E-Mail-Adresse" required />
        <button type="submit">Neues Passwort setzen</button>
      </form>
      <RouterLink to="/auth" class="back-link">Zurück zum Login</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const email = ref('')

function handleReset() {
  alert(`Passwort-Link wurde an ${email.value} gesendet (Demo)`)
  email.value = ''
}
</script>

<style scoped>
.forgot-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
  padding: 2rem;
}

.forgot-box {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

h2 {
  margin-bottom: 1rem;
  color: #2b2236;
}

p {
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 1.5rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
  padding: 0.7rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

button {
  padding: 0.7rem;
  background-color: #2b2236;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background-color: #ff6b6b;
}

.back-link {
  display: block;
  margin-top: 1.2rem;
  color: #2b2236;
  text-decoration: none;
  font-size: 0.9rem;
}

.back-link:hover {
  color: #ff6b6b;
  text-decoration: underline;
}
</style>
