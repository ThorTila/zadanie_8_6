var a = prompt("Podaj a"),
    b = prompt('Podaj b'),
    value = (a * a) - (2 * a * b) + (b * b);
console.log('Wynik to: ' + value);
if (value < 0) {//to bez sensu, bo to działanie zawsze daje wynik dodatni lub równy zero
    console.log('Wynik jest ujemny');
} else if (value > 0) {
    console.log('Wynik jest dodatni');
} else if (value === 0) {
    console.log('Wynik jest równy zero');
} else {
    console.log('Nie podałeś liczby')
}