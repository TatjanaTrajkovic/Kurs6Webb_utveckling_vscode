
<script setup>

    import { ref } from 'vue'
 
    const count = ref(0)

    function showNewCount(){
        if(count.value < 5){
            count.value++
        }else{

        }
    }

</script>


<template>

    <button @click.prevent="showNewCount" :disabled="count >= 5">
        Click: {{ count }}
    </button>
    <p>Antal klick: {{ count }}</p>
</template>



