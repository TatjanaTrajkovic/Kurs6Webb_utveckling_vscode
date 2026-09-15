
<script setup>
    import { ref } from 'vue'
    
    const newItem = ref('')
    const items = ref([])

    function addItem(){
        items.value.push(newItem.value)
        newItem.value = ''
    }
    function removeItem(index){
        items.value.splice(index, 1)
    }

</script>


<template>
    <h1>Lista</h1>
    <input type="text" v-model="newItem">
     
    <button @click="addItem">Add item</button>
    

    <ul>
        <li v-for="(item, index) in items">
            {{ item }} 
            <button @click="removeItem(index)">Remove item</button>
        </li>
        
    </ul>
</template>