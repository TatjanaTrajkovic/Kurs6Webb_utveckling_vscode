
<script setup>

    import { ref } from 'vue'

    const name = ref('')
    const greeting = ref('')

    function showGreeting(){
        greeting.value = `Hej ${name.value}!`
        name.value = ''
    }

</script>

<template>


    <p>{{ name }}</p>

    <form @submit.prevent="showGreeting">
        <input type="text" placeholder="Skriv ditt namn" v-model="name">
        <button>Skicka</button>
    </form>
    
    <p>{{ greeting }}</p>

</template>





