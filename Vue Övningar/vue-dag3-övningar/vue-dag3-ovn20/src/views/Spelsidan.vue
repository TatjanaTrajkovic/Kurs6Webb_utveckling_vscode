
<script setup>
    import { ref } from 'vue'

    // const secretNum = ref(7)
    const secretNum = ref(Math.floor(Math.random() * 10) + 1)
    const guessNum = ref('')
    const message = ref('')

    function checkGuess() {
        if(guessNum.value == secretNum.value){
            message.value = `Gissat nummer : ${guessNum.value} är rätt!`
        }else if(guessNum.value > secretNum.value){
            message.value = `För högt!`
        }else if(guessNum.value < secretNum.value){
            message.value = `För lågt`
        }else{
            message.value = `Gissat nummer: ${guessNum.value} är fel`
        }
    }
</script>

<template>

    <input type="number" v-model="guessNum">
    <button @click="checkGuess">Gissa</button>
    <p>{{ message }}</p>

</template>


