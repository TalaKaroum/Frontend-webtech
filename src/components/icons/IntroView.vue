<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    router.push('/home')
  }, 1500)
})
</script>

<template>
  <div class="intro">
    <img src="@/assets/logo.svg" alt="Logo" class="logo" />
  </div>
</template>

<style scoped>
.intro {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.logo {
  width: 150px;
  height: auto;
}
</style>
