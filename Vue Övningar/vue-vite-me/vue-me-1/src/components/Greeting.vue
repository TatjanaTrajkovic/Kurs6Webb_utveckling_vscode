
<script setup>

    import { ref } from 'vue'

    const name = ref ('')
    const greeting = ref ('')



    function showGreeting(){
        greeting.value = `Hej ${name.value}!`
    }


</script>


<template>
    <h2>Välkommen till min Vue-sida!</h2>

    <form @submit.prevent="showGreeting">
        <input type="text" v-model="name">
        <button>Hälsa</button>
        <p>{{ greeting }}</p>
    </form>

</template>



