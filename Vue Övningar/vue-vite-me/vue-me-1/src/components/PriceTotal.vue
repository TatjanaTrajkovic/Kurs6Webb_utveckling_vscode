
<script setup>
    import { ref } from 'vue'

    const pris = ref ('')
    const antal = ref ('')
    const total = ref ('')

    function showTotal(){
        total.value = pris.value * antal.value
    }

</script>

<template>

    <form @submit.prevent="showTotal">
        <input type="number" v-model="pris">
        <input type="number" v-model="antal">
        <button>Beräkna</button>
        <p>{{ total }}</p>

    </form>

</template>


