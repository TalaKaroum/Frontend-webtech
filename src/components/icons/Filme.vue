<template>
  <section class="all-movies">
    <h1>🎞️ Entdecke Filme bei Talimah.Movies</h1>

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
    title: 'Avatar',
    genre: 'Fantasy, Sci-Fi',
    poster: 'https://m.media-amazon.com/images/I/81KpQzQq+GL._AC_SY679_.jpg',
  },
  {
    id: 2,
    title: 'Titanic',
    genre: 'Drama, Romantik',
    poster: 'https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg',
  },
  {
    id: 3,
    title: 'Shutter Island',
    genre: 'Thriller, Mystery',
    poster: 'https://m.media-amazon.com/images/I/91QnHvdW++L._AC_SL1500_.jpg',
  },
  {
    id: 4,
    title: 'Dune',
    genre: 'Sci-Fi, Abenteuer',
    poster: 'https://m.media-amazon.com/images/I/91zGcrZGQZL._AC_SY679_.jpg',
  },
]
</script>

<style scoped>
.all-movies {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.all-movies h1 {
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
