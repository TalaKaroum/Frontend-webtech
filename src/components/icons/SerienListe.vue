<template>
  <section class="serien-liste">
    <h1>📺 Serienliste</h1>
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
    title: 'The Boys – Staffel 4',
    genre: 'Action, Drama (Neu)',
    poster: 'https://m.media-amazon.com/images/I/81yrA1aNm1L._AC_SY679_.jpg',
  },
  {
    id: 2,
    title: 'Bridgerton – Staffel 3',
    genre: 'Romantik, Historisch (Aktuell)',
    poster: 'https://m.media-amazon.com/images/I/71t9GW-j5vL._AC_SY679_.jpg',
  },
  {
    id: 3,
    title: 'House of the Dragon – Staffel 2',
    genre: 'Fantasy, Drama (Demnächst)',
    poster: 'https://m.media-amazon.com/images/I/71S1s6z7QmL._AC_SY679_.jpg',
  },
  {
    id: 4,
    title: 'Dark',
    genre: 'Mystery, Sci-Fi (Beliebt)',
    poster: 'https://m.media-amazon.com/images/I/71WgZo0l1yL._AC_SY679_.jpg',
  },
  {
    id: 5,
    title: 'The Bear – Staffel 3',
    genre: 'Drama, Comedy (Neu)',
    poster: 'https://m.media-amazon.com/images/I/71I5sA+qw2L._AC_SY679_.jpg',
  },
]
</script>

<style scoped>
.serien-liste {
  padding: 2rem;
}
.serien-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
}
.serien-card {
  background: #fff;
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
