//console.log('Sidan läses in');
const elRecordForm = document.querySelector('#recordForm');
const elArtist = document.querySelector('#txtArtist');
const elRecord = document.querySelector('#txtRecord');
const elOutputArtist = document.querySelector('#outputArtist');
const elOutputArtistStorage = document.querySelector('#outputArtistStorage');

// Hämta från local storage
const getRecordInfo =
  localStorage.getItem('myRecord');

const recordParsed = JSON.parse(getRecordInfo);

console.log(recordParsed);

// Retrieve
document.querySelector('#outputArtistStorage').innerHTML = recordParsed.storageArtist + ' ' + recordParsed.storageRecord;

function newRecord(event){
    const artist = elArtist.value;
    const record = elRecord.value;

    elOutputArtist.textContent = 'Artist: ' + artist + ' Skiva: ' + record;

    const recordObj = {
        storageArtist: artist,
        storageRecord: record
    }

    const stringifiedObj = JSON.stringify(recordObj);

    // Sparar till local storage
    //localStorage.setItem('artist', artist);
    //localStorage.setItem('record', record);
    localStorage.setItem('myRecord', stringifiedObj);

    event.preventDefault();
}

elRecordForm.addEventListener('submit', newRecord, false);