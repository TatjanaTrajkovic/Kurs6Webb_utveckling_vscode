<script setup>
import { ref } from 'vue'

const name = ref('')
const message = ref('')
const album = ref('')

function handleSubmit() {
  message.value = `
  Hej, ${name.value}. Ditt favoritalbum är: ${album.value}
  !`
}

</script>

<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input v-model.trim="name" placeholder="Ditt namn" required />
      <input v-model.trim="album" placeholer="Favoritalbum" />
      <button>Skicka</button>
    </form>
    <p v-if="message">{{ message }}</p>

  </div>
</template>

<style scoped>

</style>