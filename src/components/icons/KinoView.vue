<template>
  <section class="kino">
    <h1>🎬 Jetzt im Kino</h1>
    <div class="film-grid">
      <div v-for="film in aktuelleFilme" :key="film.id" class="film-card">
        <img :src="film.poster" :alt="film.title" />
        <h3>{{ film.title }}</h3>
        <p>{{ film.genre }}</p>
        <button @click="openTrailer(film.trailer)">▶️ Trailer</button>
      </div>
    </div>

    <h2 style="margin-top: 3rem;">📅 Demnächst im Kino</h2>
    <div class="film-grid">
      <div v-for="film in kommendeFilme" :key="film.id" class="film-card">
        <img :src="film.poster" :alt="film.title" />
        <h3>{{ film.title }}</h3>
        <p>Start: {{ film.start }}</p>
        <button @click="openTrailer(film.trailer)">▶️ Trailer</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const aktuelleFilme = [
  {
    id: 1,
    title: 'Dune: Part Two',
    genre: 'Sci-Fi, Action',
    poster: 'https://m.media-amazon.com/images/I/81Zr3uTuvjL._AC_SY679_.jpg',
    trailer: 'https://www.youtube.com/watch?v=Way9Dexny3w',
  },
  {
    id: 2,
    title: 'Joker: Folie à Deux',
    genre: 'Thriller, Drama',
    poster: 'https://m.media-amazon.com/images/I/71xZfVd8V6L._AC_SY679_.jpg',
    trailer: 'https://www.youtube.com/watch?v=xy8aJw1vYHo',
  },
]

const kommendeFilme = [
  {
    id: 3,
    title: 'Deadpool 3',
    start: '25. Juli 2025',
    poster: 'https://m.media-amazon.com/images/I/81QpkIctqPL._AC_SY679_.jpg',
    trailer: 'https://www.youtube.com/watch?v=uJMCNJP2ipI',
  },
  {
    id: 4,
    title: 'Inside Out 2',
    start: '17. August 2025',
    poster: 'https://m.media-amazon.com/images/I/71lqqV8JxlL._AC_SY679_.jpg',
    trailer: 'https://www.youtube.com/watch?v=LeLfBJeEq9I',
  },
]

function openTrailer(url: string) {
  window.open(url, '_blank')
}
</script>

<style scoped>
.kino {
  padding: 2rem;
}
.film-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
}
.film-card {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
}
.film-card img {
  max-width: 100%;
  border-radius: 4px;
}
.film-card button {
  margin-top: 0.5rem;
  padding: 0.4rem 1rem;
  background-color: #2b2236;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.film-card button:hover {
  background-color: #ff6b6b;
}
</style>
