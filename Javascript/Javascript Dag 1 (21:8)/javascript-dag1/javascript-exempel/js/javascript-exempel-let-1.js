let output = '';

// for loop (i deklarerat med let)
for (let i = 0; i < 9; i++) {
    let letOutput = ''; // letOutput är deklarerat med let och är bara tillgängligt i sitt scope (for-loopen)
    var varOutput = ''; // varOutput är deklarerat med var och är då tillgängligt även utanför scopet (for-loopen)

    output = output + i;
    letOutput = letOutput + i;
    varOutput = varOutput + i + ' ';

    console.log('Värdet för letOutput: ' + letOutput);
}

//console.log('Värdet för letOutput: ' + letOutput); // Vi kan inte komma åt letOutput då det är deklarerat i sitt scope (for-loopen)
// console.log('Värdet för i: ' + i); // Vi kan inte komma åt i då det är deklarerat med let i for-loopen
console.log('Värdet för varOutput: ' + varOutput); // Vi kommer åt varOutput även om den är deklarerat i loopen då vi använder var
console.log('Värdet för output: ' + output); // Vi kommer åt output då det är deklararerat längs upp i koden och blir då globalt


// for loop i deklarerat med var (på det gamla sättet)
for (var i = 0; i < 9; i++) {
    i++;
}
console.log('Värdet för i: ' + i); // Vi kommer åt i utanför loopen