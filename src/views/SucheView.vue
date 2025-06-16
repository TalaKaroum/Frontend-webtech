<template>
  <section class="suche-ergebnisse">
    <h1>🔍 Suchergebnisse für "{{ sucheQuery }}"</h1>
    <ul v-if="ergebnisse.length">
      <li v-for="eintrag in ergebnisse" :key="eintrag.id">
        <RouterLink
          :to="`/${eintrag.type === 'Film' ? 'filme' : 'serien'}/${eintrag.slug}`"
        >
          {{ eintrag.title }} ({{ eintrag.type }})
        </RouterLink>
      </li>
    </ul>
    <p v-else>Keine Ergebnisse gefunden.</p>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const daten = [
  { id: 1, title: 'The Boys', type: 'Serie', slug: 'the-boys' },
  { id: 2, title: 'Stranger Things', type: 'Serie', slug: 'stranger-things' },
  { id: 3, title: 'Breaking Bad', type: 'Serie', slug: 'breaking-bad' },
  { id: 4, title: 'Dune: Part Two', type: 'Film', slug: 'dune-part-two' },
  { id: 5, title: 'Joker: Folie à Deux', type: 'Film', slug: 'joker-folie-a-deux' },
  { id: 6, title: 'Deadpool 3', type: 'Film', slug: 'deadpool-3' }
]

const sucheQuery = computed(() => route.query.q?.toString().toLowerCase() || '')

const ergebnisse = computed(() =>
  daten.filter(item => item.title.toLowerCase().includes(sucheQuery.value))
)
</script>

<style scoped>
.suche-ergebnisse {
  padding: 2rem;
}
.suche-ergebnisse ul {
  list-style: none;
  padding: 0;
}
.suche-ergebnisse li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #ccc;
}
.suche-ergebnisse a {
  color: #2b2236;
  text-decoration: none;
  font-weight: bold;
}
.suche-ergebnisse a:hover {
  text-decoration: underline;
  color: #ff6b6b;
}
</style>
