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
import { ref, computed, onMounted, watch } from 'vue'
import axios from 'axios'

const useBackend = false // Set to true for Option B (backend

const defaultMovies = [
  {
    id: 1,
    title: 'Inception',
    genre: 'Science-Fiction, Thriller',
    poster: 'https://m.media-amazon.com/images/I/51zUbui+gbL.AC.jpg',
    rating: 8.8,
  },
  {
    id: 2,
    title: 'The Dark Knight',
    genre: 'Action, Drama',
    poster: 'https://m.media-amazon.com/images/I/51qMH6xwKhL.AC.jpg',
    rating: 9.0,
  },
  {
    id: 3,
    title: 'Interstellar',
    genre: 'Sci-Fi, Abenteuer',
    poster: 'https://m.media-amazon.com/images/I/81K8S-4GxPL.AC_SL1500.jpg',
    rating: 8.6,
  },
  {
    id: 4,
    title: 'Fight Club',
    genre: 'Drama, Mystery',
    poster: 'https://m.media-amazon.com/images/I/71UwSHSZRnS.AC_SY679.jpg',
    rating: 8.8,
  },
]

const searchQuery = ref('')
const minRating = ref(0)

const movies = ref([...defaultMovies])


const newMovie = ref({
  title: '',
  genre: '',
  poster: '',
  rating: 0,
})

async function loadMovies() {
  if (useBackend) {
    try {
      const { data } = await axios.get('https://filme-check-liste-vb1c.onrender.com/movies')
      movies.value = data
    } catch (error) {
      console.error('Fehler beim Laden der Filme:', error)
    }
  } else {
    const saved = localStorage.getItem('movies')
    movies.value = saved ? JSON.parse(saved) : [...defaultMovies]
  }
}

onMounted(loadMovies)

watch(
  movies,
  (val) => {
    if (!useBackend) {
      localStorage.setItem('movies', JSON.stringify(val))
    }
  },
  { deep: true }
)

async function addMovie() {
  if (useBackend) {
    try {
      await axios.post('https://filme-check-liste-vb1c.onrender.com/movies', newMovie.value)
      await loadMovies()
    } catch (error) {
      console.error('Fehler beim Speichern des Films:', error)
    }
  } else {
    movies.value.push({
      id: Date.now(),
      title: newMovie.value.title,
      genre: newMovie.value.genre,
      poster: newMovie.value.poster,
      rating: newMovie.value.rating,
    })
  }
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

<style scoped>
.movie-list-page {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f9f9f9;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.add-movie-form {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.add-movie-form input,
.add-movie-form button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.add-movie-form button {
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}

.add-movie-form button:hover {
  background-color: #36996e;
}

.filter-bar {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.filter-bar input,
.filter-bar select {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}

.movie-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.movie-card:hover {
  transform: translateY(-5px);
}

.poster {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.info {
  padding: 1rem;
  text-align: center;
}

.title {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.genre {
  font-size: 0.9rem;
  color: #666;
}

.rating {
  margin-top: 0.5rem;
  font-weight: bold;
  color: #f39c12;
}
</style>
