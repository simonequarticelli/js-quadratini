// Parte 1
// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio)
// se cliccati diventano rossi, gli altri diventano verdi
// Parte 2 (Bonus)
// Sopra alla griglia deve esserci un contatore che conta quanti rossi
// e quanti verdi sono stati scoperti

$(document).ready(function(){


  for (var i = 0; i < 64; i++) {
    $('.container').append('<div class="quadrato"></div>');
  };

  var quadrato = $('.quadrato');

  var array_quadrati = [];

  for (var i = 0; i < 64; i++) {
    array_quadrati.push(quadrato[i]);
  }

  console.log(array_quadrati);

  var array_bombe = [];

  var random = array_quadrati[Math.floor(Math.random()*array_quadrati.length)];


  for (var i = 0; i < 15; i++) {
    array_bombe.push(array_quadrati[Math.floor(Math.random()*array_quadrati.length)]);
    $(array_bombe).addClass('bomba');
  }

  console.log(array_bombe);


  for (var i = 0; i < array_quadrati.length; i++) {
    if ($(array_quadrati[i]).hasClass('bomba') != true) {
      $(array_quadrati[i]).addClass('salvo');
    }
  }

  console.log(array_quadrati);

  var contatore_verdi = 0;
  var contatore_rossi = 0;

  $('.quadrato').click(function(){
    if ($(this).hasClass('bomba')) {
      if (!$(this).hasClass('red')) {
        $(this).addClass('red');
        contatore_rossi++;
        $('#cont-rossi span').html(contatore_rossi);
      }

    }else{
      if (!$(this).hasClass('green')) {
        $(this).addClass('green');
        contatore_verdi++;
        $('#cont-verdi span').html(contatore_verdi);
      }

    }
  });

  console.log(array_quadrati);

});
