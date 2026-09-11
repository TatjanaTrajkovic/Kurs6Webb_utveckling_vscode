

<script setup>

    import { ref } from 'vue'

    const namn = ref('')
    const enamn = ref('')
    const fullName = ref('')

    function showFullName(){
        fullName.value = `Ditt fullständiga namn är ${namn.value} ${enamn.value}!`
    }

</script>


<template>
    <form @submit.prevent='showFullName'>
        <input v-model="namn">
        <input v-model="enamn">
        <button>Visa</button>
        <p>{{ fullName }}</p>
    </form>
</template>

