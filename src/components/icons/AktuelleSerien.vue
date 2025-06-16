<template>
  <section class="aktuelle-serien">
    <h1>📺 Aktuelle Serien</h1>
    <div class="serien-grid">
      <div v-for="serie in serien" :key="serie.id" class="serien-card">
        <img :src="serie.poster" :alt="serie.title" />
        <h3>{{ serie.title }}</h3>
        <p>{{ serie.genre }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const serien = [
  {
    id: 1,
    title: 'The Boys',
    genre: 'Action, Drama',
    poster: 'https://m.media-amazon.com/images/I/81yrA1aNm1L._AC_SY679_.jpg',
  },
  {
    id: 2,
    title: 'Stranger Things',
    genre: 'Mystery, Thriller',
    poster: 'https://m.media-amazon.com/images/I/71yDb2fDILL._AC_SY679_.jpg',
  },
  {
    id: 3,
    title: 'Dark',
    genre: 'Sci-Fi, Mystery',
    poster: 'https://m.media-amazon.com/images/I/71WgZo0l1yL._AC_SY679_.jpg',
  },
]
</script>

<style scoped>
.aktuelle-serien {
  padding: 2rem;
}
.serien-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
}
.serien-card {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
}
.serien-card img {
  max-width: 100%;
  border-radius: 4px;
}
</style>
