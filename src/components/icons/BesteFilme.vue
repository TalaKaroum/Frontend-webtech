<template>
  <section class="beste-filme">
    <h1>🎬 Beste Filme aller Zeiten</h1>
    <div class="movie-grid">
      <div v-for="movie in movies" :key="movie.id" class="movie-card">
        <img :src="movie.poster" :alt="movie.title" />
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.genre }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const movies = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    genre: 'Drama',
    poster: 'https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg',
  },
  {
    id: 2,
    title: 'The Godfather',
    genre: 'Crime, Drama',
    poster: 'https://m.media-amazon.com/images/I/71xZfVd8V6L._AC_SY679_.jpg',
  },
  {
    id: 3,
    title: 'The Dark Knight',
    genre: 'Action, Crime, Drama',
    poster: 'https://m.media-amazon.com/images/I/51J0WWwUgbL._AC_.jpg',
  },
  {
    id: 4,
    title: 'Inception',
    genre: 'Sci-Fi, Thriller',
    poster: 'https://m.media-amazon.com/images/I/51s+uGV9MiL._AC_SY679_.jpg',
  },
  {
    id: 5,
    title: 'Fight Club',
    genre: 'Drama',
    poster: 'https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg',
  },
  {
    id: 6,
    title: 'Forrest Gump',
    genre: 'Romance, Drama',
    poster: 'https://m.media-amazon.com/images/I/41cDCf+T7zL._AC_.jpg',
  },
  {
    id: 7,
    title: 'The Matrix',
    genre: 'Action, Sci-Fi',
    poster: 'https://m.media-amazon.com/images/I/51vpnbwFHrL._AC_.jpg',
  },
  {
    id: 8,
    title: 'Pulp Fiction',
    genre: 'Crime, Drama',
    poster: 'https://m.media-amazon.com/images/I/51V5ZpFyaFL._AC_.jpg',
  },
  {
    id: 9,
    title: 'Interstellar',
    genre: 'Sci-Fi, Drama',
    poster: 'https://m.media-amazon.com/images/I/71n58Jk2C7L._AC_SY679_.jpg',
  },
  {
    id: 10,
    title: 'Avengers: Endgame',
    genre: 'Action, Sci-Fi',
    poster: 'https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg',
  },
]
</script>

<style scoped>
.beste-filme {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}
h1 {
  text-align: center;
  margin-bottom: 2rem;
}
.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1.5rem;
}
.movie-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.movie-card img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
.movie-card h3 {
  margin: 0.5rem 0 0.2rem;
}
.movie-card p {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}
</style>
