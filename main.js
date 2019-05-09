// Parte 1
// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio)
// se cliccati diventano rossi, gli altri diventano verdi
// Parte 2 (Bonus)
// Sopra alla griglia deve esserci un contatore che conta quanti rossi
// e quanti verdi sono stati scoperti

$(document).ready(function(){

// var array_quadrati = [];
// var quadrato = $('#quadrato');
// for (var i = 1; i < 64; i++) {
//   quadrato.clone().appendTo('.container');
//   array_quadrati.push(quadrato[i]);
// };

var quadrato = $('.quadrato')

var array_quadrati = [];

for (var i = 0; i < 64; i++) {
  array_quadrati.push(quadrato[i]);
}

console.log(array_quadrati);

var array_bombe = [];

var random = array_quadrati[Math.floor(Math.random()*array_quadrati.length)];

for (var i = 0; i < 15; i++) {
  array_bombe.push(array_quadrati[Math.floor(Math.random()*array_quadrati.length)]);
}

console.log(array_bombe);

var contatore_rossi = 0;
var contatroe_verdi = 0;

$(array_bombe).click(function () {
  $(this).addClass('red');
});


});
