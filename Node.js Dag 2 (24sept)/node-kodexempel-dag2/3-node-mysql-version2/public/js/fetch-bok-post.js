const elForm = document.querySelector('#formBok');
const elBoktitel = document.querySelector('#bokTitel');
const elBokforfattare = document.querySelector('#bokForfattare');
const elBokisbn = document.querySelector('#bokIsbn');
const elBokpris = document.querySelector('#bokPris');
const elBokKategoriId = document.querySelector('#bokKategoriId');
const elOutput = document.querySelector('#output');

function newBook(event){
    event.preventDefault();
    let bokTitel = elBoktitel.value;
    let bokForfattare = elBokforfattare.value;
    let bokIsbn = elBokisbn.value;
    let bokKategoriId = elBokKategoriId.value;
    let bokPris = elBokpris.value;

async function createBook() {
  try {
    const response = await fetch('http://localhost:3000/api/books/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        bokTitel:bokTitel, 
        bokForfattare:bokForfattare, 
        bokIsbn:bokIsbn,
          bokPris:bokPris,
          bokKategoriId:bokKategoriId
      })
    });
    if (!response.ok) throw new Error('Fel: ' + response.status);
    const data = await response.json();
    console.log('Ny bok tillagd:', data);
    elOutput.textContent = 'Ny bok tillagd!';
  } catch (error) {
    console.error(error);
  }
}

createBook();

}


elForm.addEventListener('submit', newBook, false);

/*
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
https://dev.to/devamaz/using-fetch-api-to-get-and-post--1g7d
 */