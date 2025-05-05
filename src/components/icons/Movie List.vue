<template>
  <section class="movie-list-page">
    <h1 class="page-title">🎬 Beste Filme bei Talimah.Movies</h1>

    <!-- Film hinzufügen Formular -->
    <form class="add-movie-form" @submit.prevent="addMovie">
      <input v-model="newMovie.title" type="text" placeholder="Titel" required />
      <input v-model="newMovie.genre" type="text" placeholder="Genre" required />
      <input v-model="newMovie.poster" type="url" placeholder="Poster URL" required />
      <input v-model.number="newMovie.rating" type="number" placeholder="Bewertung (1-10)" min="1" max="10" required />
      <button type="submit">Film hinzufügen</button>
    </form>

    <!-- Suchfeld -->
    <div class="filter-bar">
      <input v-model="searchQuery" type="text" placeholder="🔍 Titel oder Genre suchen..." />
      <select v-model="minRating">
        <option value="0">Alle Bewertungen</option>
        <option v-for="n in 10" :key="n" :value="n">Ab {{ n }}/10</option>
      </select>
    </div>

    <div class="movie-grid">
      <div v-for="movie in filteredMovies" :key="movie.id" class="movie-card">
        <img :src="movie.poster" :alt="movie.title" class="poster" />
        <div class="info">
          <h2 class="title">{{ movie.title }}</h2>
          <p class="genre">{{ movie.genre }}</p>
          <div class="rating">{{ movie.rating.toFixed(1) }}/10 ⭐</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const searchQuery = ref('')
const minRating = ref(0)

const movies = ref([
  {
    id: 1,
    title: 'Inception',
    genre: 'Science-Fiction, Thriller',
    poster: 'https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg',
    rating: 8.8,
  },
  {
    id: 2,
    title: 'The Dark Knight',
    genre: 'Action, Drama',
    poster: 'https://m.media-amazon.com/images/I/51qMH6xwKhL._AC_.jpg',
    rating: 9.0,
  },
  {
    id: 3,
    title: 'Interstellar',
    genre: 'Sci-Fi, Abenteuer',
    poster: 'https://m.media-amazon.com/images/I/81K8S-4GxPL._AC_SL1500_.jpg',
    rating: 8.6,
  },
  {
    id: 4,
    title: 'Fight Club',
    genre: 'Drama, Mystery',
    poster: 'https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_SY679_.jpg',
    rating: 8.8,
  },
  {
    id: 5,
    title: 'Pulp Fiction',
    genre: 'Crime, Drama',
    poster: 'https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg',
    rating: 8.9,
  },
  {
    id: 6,
    title: 'Forrest Gump',
    genre: 'Drama, Romantik',
    poster: 'https://m.media-amazon.com/images/I/61r83ZVyrBL._AC_SY679_.jpg',
    rating: 8.8,
  },
  {
    id: 7,
    title: 'Gladiator',
    genre: 'Action, Drama',
    poster: 'https://m.media-amazon.com/images/I/51A1ZXK0n-L._AC_.jpg',
    rating: 8.5,
  },
  {
    id: 8,
    title: 'The Godfather',
    genre: 'Crime, Drama',
    poster: 'https://m.media-amazon.com/images/I/71xBLRBYOiL._AC_SY679_.jpg',
    rating: 9.2,
  },
])

const newMovie = ref({
  title: '',
  genre: '',
  poster: '',
  rating: 0,
})

function addMovie() {
  if (!newMovie.value.title || !newMovie.value.genre || !newMovie.value.poster || newMovie.value.rating < 1 || newMovie.value.rating > 10) return

  movies.value.push({
    id: Date.now(),
    title: newMovie.value.title,
    genre: newMovie.value.genre,
    poster: newMovie.value.poster,
    rating: newMovie.value.rating,
  })
  newMovie.value = { title: '', genre: '', poster: '', rating: 0 }
}

const filteredMovies = computed(() => {
  return movies.value.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      movie.genre.toLowerCase().includes(searchQuery.value.toLowerCase())
    const meetsRating = movie.rating >= minRating.value
    return matchesSearch && meetsRating
  })
})
</script>
