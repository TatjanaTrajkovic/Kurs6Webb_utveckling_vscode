<script setup>
import { ref } from 'vue'

const newIcecream = ref('')
const newIcecreamPrice = ref('')
const icecreamArray = ref([
          {
            id: 1,
            name: 'Piggelin',
            price: '15',
            favorite: false
          },
          {
          id: 2,
            name: 'Sandwich',
            price: '23',
            favorite: false
          }
        ])
 const nextIcecreamId = ref(3)

function addIcecream(){
    icecreamArray.value.push({
        id: nextIcecreamId.value++,
        name: newIcecream.value,
        price: newIcecreamPrice.value
    })
}

function deleteIcecream(icecreamIndex){
    icecreamArray.value.splice(icecreamIndex, 1)
}
      
function makeIcecreamFavorite(icecreamMark){
        icecreamMark.favorite = true
}


</script>

<template>
  <div>
    <h1>Mina favoritglassar</h1>
    <form v-on:submit.prevent="addIcecream">
     <label>Lägg till en ny glass: </label>
     <input type="text" v-model="newIcecream" placeholder="Namn på glassen">
     <input type="text" v-model="newIcecreamPrice" placeholder="Pris">
     <button>Lägg till</button>
    </form>
   <h2>{{newIcecream}}</h2>
   <ul>
    <li v-for="(icecream, index) in icecreamArray" :class="{icecreamFavorite: icecream.favorite}">
      {{icecream.name}} {{icecream.price}} kr
      <button @click="deleteIcecream(index)">Ta bort</button>
      <button @click="makeIcecreamFavorite(icecream)">Gör till favorit</button>
    </li>
   </ul>
  </div>
</template>

<style scoped>
body {
	font-family: Arial, Helvetica, sans-serif;
}

p {
	font-size: 14px;
	line-height:130%;
	margin: 0;
	margin-bottom: 7px;
}

h1 { 
	font-family: Georgia, Arial, Helvetica, sans-serif;
	font-size: 40px;
	margin: 0px; 
	margin-bottom: 12px;
}

ul{
	margin: 0;
	padding: 0;
	list-style-type: none;
}

li{
	font-size: 14px;
	margin: 0;
	padding: 0;
	margin-bottom: 4px;
}

a { 
	font-size: 16px;
	color: #f90; 
	text-decoration: none;
}

a:hover {  
	text-decoration: underline;
}
/* För att centrera en bild måste man göra om den till ett block-element */
.img-center{
	display: block;
	margin: 0 auto; /* centrerar */
}
.critical{
	color: red;
}
.prio{
	color: red;
}
.icecreamFavorite{
	color: green;
	font-weight: bold;
}

</style>
