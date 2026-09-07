<script setup>
import { ref } from 'vue'

const name = ref('')
const greeting = ref('')

function showGreeting(){
    greeting.value = `Hej ${name.value}. Hoppas allt är bra!`
}
</script>

<template>
<p>{{ name }}</p>
<p>{{ greeting }}</p>
<form @submit.prevent="showGreeting">
    <input type="text" placeholder="Skriv ditt namn" v-model="name">
    <button>Skicka</button>
</form>
</template>

<style scoped>

</style>