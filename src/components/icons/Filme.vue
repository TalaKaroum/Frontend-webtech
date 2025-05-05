<!-- Änderungen: @mouseenter & @mouseleave entfernt → ersetzt mit @click -->

<template>
  <header class="navbar">
    <div class="navbar-left">
      <h1 class="brand">TALIMAH.<span class="highlight">MOVIES</span></h1>
      <nav class="nav-links">
        <!-- Nur beim Klick öffnet sich das Dropdown -->
        <div class="dropdown">
          <button class="dropdown-trigger" @click="toggleFilmeDropdown">
            Filme
          </button>
          <div v-if="showFilmeDropdown" class="dropdown-menu">
            <RouterLink to="/filme" class="dropdown-item" @click="closeDropdown">Beste Filme</RouterLink>
            <RouterLink to="/filme-bewerten" class="dropdown-item" @click="closeDropdown">Filme bewerten</RouterLink>
          </div>
        </div>

        <RouterLink to="/serien">Serien</RouterLink>
        <RouterLink to="/news">News</RouterLink>
        <RouterLink to="/movies">Filmliste</RouterLink>
      </nav>
    </div>

    <div class="navbar-right">
      <!-- ... dein Login-Bereich bleibt unverändert ... -->
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showLogin = ref(false)
const showFilmeDropdown = ref(false)

function toggleLoginMenu() {
  showLogin.value = !showLogin.value
}

function toggleFilmeDropdown() {
  showFilmeDropdown.value = !showFilmeDropdown.value
}

function closeDropdown() {
  showFilmeDropdown.value = false
}

function handleLogin() {
  alert('Login erfolgreich (Demo)')
}
</script>

<style scoped>
/* ... dein gesamter bestehender Style ... */

.dropdown {
  position: relative;
}

.dropdown-trigger {
  background: none;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
  padding: 0;
}

.dropdown-trigger:hover {
  color: #ff6b6b;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  color: #2b2236;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 180px;
  z-index: 1001;
  display: flex;
  flex-direction: column;
}

.dropdown-item {
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: #2b2236;
  font-weight: 500;
  border-bottom: 1px solid #eee;
}

.dropdown-item:hover {
  background-color: #f6f6f6;
  color: #ff6b6b;
}
</style>
