<template>
  <section class="bewertung-section">
    <h1>🎥 Filme bewerten</h1>

    <form @submit.prevent="submitBewertung">
      <label for="film">Filmname:</label>
      <input id="film" v-model="filmname" required placeholder="Z.B. Inception" />

      <label>Bewertung:</label>
      <div class="sterne">
        <span v-for="n in 5" :key="n" @click="bewertung = n" :class="{ aktiv: n <= bewertung }"
        >★</span
        >
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
    <p v-if="errorMsg" class="error-text">{{ errorMsg }}</p>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { filmname, bewertung, kommentar, danke, absendenBewertung as absenden } from '../../api'

const errorMsg = ref('')

async function submitBewertung() {
  const success = await absenden()
  if (!success) {
    errorMsg.value = 'Bewertung konnte nicht gesendet werden.'
  } else {
    errorMsg.value = ''
  }
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
.error-text {
  margin-top: 1rem;
  color: red;
  text-align: center;
  font-weight: bold;
}
</style>
