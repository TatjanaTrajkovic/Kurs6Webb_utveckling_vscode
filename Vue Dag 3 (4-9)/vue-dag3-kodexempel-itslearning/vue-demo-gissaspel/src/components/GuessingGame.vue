<script setup>
import { ref } from 'vue'

const message = ref('Gissa ett nummer')
const yourNumber = ref('')
const randTodo = ref(Math.floor(Math.random()*10+1))
const isFinishedGame = ref(false)

function guessNumber() {
    console.log('Rätt nummer: ' + randTodo.value)
    if(yourNumber.value < randTodo.value){
        message.value = 'Ditt nummer är för lågt!'
    }
    else if(yourNumber.value > randTodo.value){
        message.value = 'Ditt nummer är för högt!'
    }
    else{
        message.value = 'Du har gissat rätt!'
        yourNumber.value = ''
        isFinishedGame.value = true
        randTodo.value = Math.floor(Math.random()*10+1)
    }
}

function newGame(){
    isFinishedGame.value = false
    message.value = 'Gissa ett nummer'
}
</script>

<template>
  <div>
    <button v-if="isFinishedGame" v-on:click="newGame">Nytt Spel</button>
    <p>Ditt nummer: {{ yourNumber }}</p>
    <p>{{ message }}</p>
    <p v-if="!isFinishedGame">
        <input  v-model="yourNumber">
        <button @click="guessNumber">Gissa ett nummer</button>
    </p>
  </div>
</template>

<style scoped>

</style>