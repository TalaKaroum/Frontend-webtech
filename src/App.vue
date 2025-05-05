<template>
  <div id="app">
    <Navbar />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/icons/Navbar.vue'
</script>

<style scoped>
.main-content {
  padding-top: 80px;
  min-height: calc(100vh - 80px);
}
</style>
