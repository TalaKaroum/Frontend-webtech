<template>
  <section class="hero">
    <div class="overlay">
      <h1>Willkommen bei MovieDB</h1>
      <p>Entdecke und bewerte deine Lieblingsfilme!</p>
      <router-link to="/movies" class="cta-button">Jetzt stöbern</router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
// Dieser Banner benötigt keine Logik
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 60vh;
  background-image: url('https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=2000&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.overlay {
  background: rgba(0, 0, 0, 0.6);
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
}
.cta-button {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1.25rem;
  background: #ff5c5c;
  border-radius: 4px;
  color: #fff;
  transition: background 0.3s ease;
}
.cta-button:hover {
  background: #ff7b7b;
}
</style>
