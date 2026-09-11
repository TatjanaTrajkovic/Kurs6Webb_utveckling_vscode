
<script setup>
    import ref from 'vue'

    const animal = ref('')
    const message = ref('')


    function showMessage(){
        if(animal.value != ''){
            message.value = `Ditt favorit djur är ${animal.value}!`
        }else{
            message.value = "Du måste skriva ett djur!"
        }  
    }

</script>

<template>
    <form @submit.prevent="showMessage">
        <input type="text" v-model="animal">
        <p>{{ animal }}</p>
        <p>{{ message }}</p>
        <button>Visa</button>
    </form>
</template>

<style scoped>

</style>
