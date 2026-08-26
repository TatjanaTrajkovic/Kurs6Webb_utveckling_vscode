var a = 1;
var b = 2;

if (a === 1) {
    a = 11; // Scopet är globalt
    let b = 22; // Scopet är i if-satsen då vi använder let

    console.log(a);  // Det blir 11 då variabeln har fått ett nytt värde i if-satsen
    console.log(b);  // Det blir 22 då variabeln är deklarerat med let i ett block (if-satsen) och tillhör då det scopet
}

console.log(a); // Det blir 11 då variabeln är deklarerat globalt och fått ett nytt värde (i if-satsen)
console.log(b); // Det blir 2 då variabeln är deklarerat globalt med var och påverkas inte av variabeln med samma namn i if-satsen som där är deklarerat med let

