
<script setup>

    defineProps({ // Den här komponenten tillåter att föräldern skickar information till mig.
        name: {   // Jag förväntar mig en prop som heter name.
            type: String, //Den ska vara text (String).
            required: true // Den måste skickas (required: true).
        }
    })

</script>

<template>

    <p>Användare: {{ name }}</p>
    

</template>


