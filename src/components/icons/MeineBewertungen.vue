<template>
  <section class="bewertungen">
    <h1>⭐ Deine bewerteten Filme</h1>

    <ul v-if="filme.length">
      <li v-for="(film, index) in filme" :key="index">
        <strong>{{ film.title }}</strong>
        <div class="sterne">
          <span v-for="n in 5" :key="n" :class="{ aktiv: n <= film.stars }">★</span>
        </div>
        <p v-if="film.comment">🗨️ {{ film.comment }}</p>
      </li>
    </ul>
    <p v-else>Du hast noch keine Filme bewertet.</p>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const filme = ref<any[]>([])

onMounted(() => {
  const gespeicherte = JSON.parse(localStorage.getItem('bewertungen') || '[]')
  filme.value = gespeicherte.reverse()
})
</script>

<style scoped>
.bewertungen {
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem;
}
h1 {
  margin-bottom: 1.5rem;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 1rem;
}
.sterne {
  font-size: 1.5rem;
  color: #ccc;
}
.sterne .aktiv {
  color: gold;
}
p {
  margin-top: 0.3rem;
  font-style: italic;
}
</style>
