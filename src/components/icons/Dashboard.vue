<script setup lang="ts">
defineProps<{ username: string }>();
</script>

<template>
  <div class="dashboard">
    <h1>Willkommen, {{ username }}!</h1>
    <p>Du bist eingeloggt.</p>
  </div>
</template>

<style scoped>
.dashboard {
  text-align: center;
  margin-top: 50px;
}
</style>
