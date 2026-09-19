<script setup>
import { ref, onMounted } from 'vue'

const data = ref(null)
const loading = ref(false)
const error = ref(null)
const booksList = ref(null)

// GET-anrop när komponenten mountas
const fetchData = async () => {
  loading.value = true
  error.value = null
  try {
    const res = await fetch('http://localhost:3000/api/books')
    if (!res.ok) {
      throw new Error('Något gick fel: ' + res.status)
    }
    data.value = await res.json()
    booksList.value = data.value.books
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

// POST-anrop (t.ex. vid knapptryckning)
const createBook = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        bokTitel: 'Bröderna Lejonhjärta',
        bokForfattare: 'Astrid Lindgren',
        bokIsbn: '1234-5',
        bokPris: 120,
        bokKategoriId: 2
      })
    })
    if (!res.ok) {
      throw new Error('Kunde inte lägga till boken')
    }
    data.value = await res.json();
  } catch (err) {
    error.value = err.message
  }
}

onMounted(fetchData)
</script>

<template>
  <div>
    <h1>Exempel: Fetch med Vue 3 (Composition API)</h1>

    <button @click="createBook">Lägg till ny bok</button>

    <div v-if="loading">Hämtar data...</div>
    <div v-else-if="error" style="color: red">{{ error }}</div>
    <ul v-else>
      <li v-for="book in booksList" :key="book.id">
        <strong>{{ book.bokTitel }}</strong>
        <p>{{book.bokForfattare }}</p>
      </li>
    </ul>
  </div>
</template>
