async function loadComponent(selector, file) { //selector är element och fil som kommer visas
    const element = document.querySelector(selector); //selector är id="about", id="header", id="footer" about, header, 

    const response = await fetch(file); //await väntar in våran omvandlad file info data

    if (!response.ok) {         //om den går fel då har vi bara en felhanterings msg
        throw new Error(`Kunde inte ladda ${file}`);
    }

    element.innerHTML = await response.text();//då kommer den att läsa igenom som vi har i våran fil
}

loadComponent("#header", "header.html");// man kallar på de funktionerna 2 gånger för de har olika id och olika innehåll
loadComponent("#footer", "footer.html");
loadComponent("#favorite", "favorite.html");


//denna exempel visar att man kan fetcha filer som tex favorite.html och inte bara data.json