

<script setup>

    import { ref } from 'vue'

    const antal = ref(0)

    function count (){
        antal.value++
    }

</script>


<template>
    <button @click.prevent="count">{{ antal }}</button>
</template>


<style scoped>


</style>