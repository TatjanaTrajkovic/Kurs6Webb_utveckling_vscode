const elForm = document.querySelector('#formReg');
const elName = document.querySelector('#txtName');
const elOutput = document.querySelector('#output');

function showName(event){
	// Använd value när man hämtar från input i formuläret
	let name = elName.value;

	//console.log('Textfält i funktion ' + name);

	elOutput.textContent = 'Hej ' + name;

    // Submittar inte formuläret
    event.preventDefault(); //
}

elForm.addEventListener('submit', showName, false);