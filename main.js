'use strict';

// First slider

const firstBag = document.getElementById('01');
const secondBag = document.getElementById('02');
const thirdBag = document.getElementById('03');
const fourthBag = document.getElementById('04');
const numberOfBug = document.getElementsByClassName('numberOfBug');
const coffeName = document.getElementsByClassName('coffeName');

// Elements of history
const historyFirst = document.getElementById('historyFirst');
const historySecond = document.getElementById('historySecond');
const historyThird = document.getElementById('historyThird');

const manufackt = '<span>Кава ароматизована</span> <h3 class="coffeName_H_2">«Шоколад»</h3>';
const caramel = '<span>Кава ароматизована</span> <h3 class="coffeName_H_3">«Kарамель»</h3>';
const cream = '<span>Кава ароматизована</span> <h3 class="coffeName_H_1">«Ірландський крем»</h3> ';
const milk = '<span>Кава ароматизована</span> <h3 class="coffeName_H_1">«Топлене молоко»</h3> ';

const carrouselContent = function(e) {

  if (firstBag.classList[1] === 'active') {
    numberOfBug[0].innerHTML = '01';
    coffeName[0].innerHTML = '«Топлене молоко»';

    historyFirst.innerHTML = manufackt;
    historySecond.innerHTML = caramel;
    historyThird.innerHTML = cream;
  } else if (secondBag.classList[1] === 'active') {
    numberOfBug[0].innerHTML = '02';
    coffeName[0].innerHTML = '«Ірландський крем»';

    historyFirst.innerHTML = milk;
    historySecond.innerHTML = manufackt;
    historyThird.innerHTML = caramel;
  } else if (thirdBag.classList[1] === 'active') {
    numberOfBug[0].innerHTML = '03';
    coffeName[0].innerHTML = '«Карамель»';

    historyFirst.innerHTML = cream;
    historySecond.innerHTML = milk;
    historyThird.innerHTML = manufackt;
  } else if (fourthBag.classList[1] === 'active') {
    numberOfBug[0].innerHTML = '04';
    coffeName[0].innerHTML = '«Шоколад»';

    historyFirst.innerHTML = caramel;
    historySecond.innerHTML = cream;
    historyThird.innerHTML = milk;
  };
};

setInterval(carrouselContent, 300);

// Choose city settings//
const odessa = document.getElementById('odessa');
const lviv = document.querySelector('#lviv');
const kyiv = document.querySelector('#kyiv');
const one = document.querySelector('#one');
const two = document.querySelector('#two');

kyiv.style.color = '#3b3b3b';
let x = 1;

const clearStyle = () => {
  odessa.style.color = '';
  lviv.style.color = '';
  kyiv.style.color = '';
};

function arrowOnMap() {
  clearStyle();
  console.log(x)
  x++;
  if (x === 3) {
    odessa.style.color = '#3b3b3b';
    one.innerHTML = 'ТРЦ Афiна, 4п';
    two.innerHTML = '937-99-92';
    x = 0;
  } else if (x === 1) {
    kyiv.style.color = '#3b3b3b';
    one.innerHTML = 'Поштова Площа 82';
    two.innerHTML = '123-45-67-890';
  } else if (x === 2) {
    lviv.style.color = '#3b3b3b';
    one.innerHTML = 'Соборна Площа 2А';
    two.innerHTML = '+38096 400 9008';
  }
}

function changeAdress(e) {
  clearStyle();

  if (e.id === 'lviv') {
    lviv.style.color = '#3b3b3b';
    one.innerHTML = 'Соборна Площа 2А';
    two.innerHTML = '+38096 400 9008';
  } else if (e.id === 'odessa') {
    odessa.style.color = '#3b3b3b';
    one.innerHTML = 'ТРЦ Афiна, 4п';
    two.innerHTML = '937-99-92';
  } else if (e.id === 'kyiv') {
    kyiv.style.color = '#3b3b3b';
    one.innerHTML = 'Поштова Площа 82';
    two.innerHTML = '123-45-67-890';
  }
}


window.onload = function() {
  window.addEventListener('scroll', function() {
    scroll = window.pageYOffset || document.documentElement.scroll;
    scroll > 200 ? document.querySelector('.topButton').classList.add('fixed') : document.querySelector('.topButton').classList.remove('fixed');
  });
}
$(document).ready(function () {
  $('.topButton').click(function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
})