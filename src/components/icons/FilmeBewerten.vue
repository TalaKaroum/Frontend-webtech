<template>
  <section class="bewertung-section">
    <h1>🎥 Filme bewerten</h1>

    <form @submit.prevent="absenden">
      <label for="film">Filmname:</label>
      <input id="film" v-model="filmname" required placeholder="Z.B. Inception" />

      <label>Bewertung:</label>
      <div class="sterne">
        <span
          v-for="n in 5"
          :key="n"
          @click="bewertung = n"
          :class="{ aktiv: n <= bewertung }"
        >★</span>
      </div>

      <label for="kommentar">Kommentar (optional):</label>
      <textarea
        id="kommentar"
        v-model="kommentar"
        rows="3"
        placeholder="Was hat dir gefallen oder nicht?"
      ></textarea>

      <button type="submit">Absenden</button>
    </form>

    <p v-if="danke" class="danke-text">🎉 Danke für deine Bewertung!</p>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const filmname = ref('')
const bewertung = ref(0)
const kommentar = ref('')
const danke = ref(false)

function absenden() {
  const neueBewertung = {
    film: filmname.value,
    sterne: bewertung.value,
    kommentar: kommentar.value,
  }

  // Bestehende Bewertungen holen und neue hinzufügen
  const bisher = JSON.parse(localStorage.getItem('bewertungen') || '[]')
  bisher.push(neueBewertung)
  localStorage.setItem('bewertungen', JSON.stringify(bisher))

  console.log('Bewertung gespeichert:', neueBewertung)

  // Reset und Dankeschön
  filmname.value = ''
  bewertung.value = 0
  kommentar.value = ''
  danke.value = true

  setTimeout(() => {
    danke.value = false
  }, 4000)
}
</script>

<style scoped>
.bewertung-section {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}
h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}
label {
  display: block;
  margin-top: 1rem;
  font-weight: bold;
}
input,
textarea {
  width: 100%;
  padding: 0.7rem;
  margin-top: 0.3rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}
.sterne {
  font-size: 1.6rem;
  margin: 0.5rem 0;
}
.sterne span {
  cursor: pointer;
  color: #ccc;
}
.sterne span.aktiv {
  color: #f1c40f;
}
button {
  margin-top: 1.2rem;
  padding: 0.8rem 1.5rem;
  background-color: #2b2236;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
}
button:hover {
  background-color: #ff6b6b;
}
.danke-text {
  margin-top: 1.5rem;
  color: green;
  text-align: center;
  font-weight: bold;
}
</style>
