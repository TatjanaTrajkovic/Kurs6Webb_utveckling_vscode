
<script setup>

    import { ref } from 'vue'

    const name = ref ('')
    const greeting = ref ('')



    function showGreeting(){
        greeting.value = `Hej ${name.value}!`
    }


</script>


<template>

    <form @submit.prevent="showGreeting">
        <input type="text" v-model="name">
        <button>Hälsa</button>
        <p>{{ greeting }}</p>
    </form>

</template>



