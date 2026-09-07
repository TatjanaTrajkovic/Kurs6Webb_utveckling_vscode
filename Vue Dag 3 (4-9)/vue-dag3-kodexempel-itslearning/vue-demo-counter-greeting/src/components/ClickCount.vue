<script setup>
import { ref } from 'vue'

const count = ref(0)
function increment() {
  count.value++
}

</script>

<template>
  <div>
    <button @click="increment" :disabled="count >= 5">
      Klicka ({{ count }})
    </button>
    <p v-if="count >= 5">Max uppnådd!</p>
  </div>
</template>

<style scoped>

</style>