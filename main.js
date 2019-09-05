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
    }
    ;
};

setInterval(carrouselContent, 300);

// Choose city settings//
const odessa = document.getElementById('odessa');
const lviv = document.querySelector('#lviv');
const kyiv = document.querySelector('#kyiv');
const one = document.querySelector('#one');
const two = document.querySelector('#two');

lviv.style.color = '#3b3b3b';
let x = 1;

const clearStyle = ()=>{
    odessa.style.color = 'inherit';
    lviv.style.color = 'inherit';
    kyiv.style.color = 'inherit';
};

function arrowOnMap() {
    x++;
   if (lviv.style.color != 'inherit'){
       if (x === 4) {
        one.innerHTML = ' вул.Валова,16';
        two.innerHTML = '+38096 400 9008';
        changeMap.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d270.4675955198805!2d24.033547353352425!3d49.83990372961695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6c1083f281%3A0xbd25c7366be916ea!2sLviv%20coffee%20manufacture%20(Valova)!5e0!3m2!1sen!2sua!4v1567693015098!5m2!1sen!2sua";
        x=0;
      } else if (x === 1) {
        one.innerHTML = 'Соборна Площа 2А';
        two.innerHTML = '+38096 400 9008';
        changeMap.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.2464932373287!2d30.35574801568917!3d50.436509196250505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cb791193a71d%3A0x326dd8d074a8d248!2z0YPQuy4g0KHQvtCx0L7RgNC90LDRjywgMiwg0J_QtdGC0YDQvtC_0LDQstC70L7QstGB0LrQsNGPINCR0L7RgNGJ0LDQs9C-0LLQutCwLCDQmtC40LXQstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAwODEzMA!5e0!3m2!1sru!2sua!4v1566129018104!5m2!1sru!2sua";
        
      } else if (x === 2) {
        one.innerHTML = 'вул.Братів Рогатинців,7';
        two.innerHTML = '+38096 400 9007';
        changeMap.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321.6412189926323!2d24.031225241581286!3d49.84001947514635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6c295051eb%3A0x404bd681027a4dcf!2sLviv%20Coffee%20Manufacture!5e0!3m2!1sen!2sua!4v1567692941201!5m2!1sen!2sua";
      }
      else if (x === 3) {
        one.innerHTML = 'пр. Свободи, 22';
        two.innerHTML = '+38098 340 0900';
        changeMap.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321.61935938924046!2d24.027132657641005!3d49.84330540062623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add72f4e5b97d%3A0x91213d0b174a2ca1!2sL%CA%B9vivs%CA%B9ka%20Manufaktura%20Kavy!5e0!3m2!1sen!2sua!4v1567692787832!5m2!1sen!2sua";   
      }
    
   }
   else if (odessa.style.color === 'inherit'|| kyiv.style.color === 'inherit'){
    x=1;
  }
 }
    

let changeMap = document.querySelector('.map iframe');

function changeAdress(e) {
    clearStyle();

    if (e.id === 'lviv') {
        lviv.style.color = '#3b3b3b';
        one.innerHTML = 'Соборна Площа 2А';
        two.innerHTML = '+38096 400 9008';
        changeMap.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.2464932373287!2d30.35574801568917!3d50.436509196250505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cb791193a71d%3A0x326dd8d074a8d248!2z0YPQuy4g0KHQvtCx0L7RgNC90LDRjywgMiwg0J_QtdGC0YDQvtC_0LDQstC70L7QstGB0LrQsNGPINCR0L7RgNGJ0LDQs9C-0LLQutCwLCDQmtC40LXQstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAwODEzMA!5e0!3m2!1sru!2sua!4v1566129018104!5m2!1sru!2sua";
        
    } else if (e.id === 'odessa') {
        odessa.style.color = '#3b3b3b';
        one.innerHTML = 'Дерибасівська 22';
        two.innerHTML = '937-99-92';
        changeMap.src ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5494.359351354307!2d30.736537493433296!3d46.48475452901624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c63197b6b343bf%3A0x14b7101a7ef651c4!2sLviv%20Coffee%20Manufacture!5e0!3m2!1sen!2sua!4v1567687260507!5m2!1sen!2sua";
    } else if (e.id === 'kyiv') {
        kyiv.style.color = '#3b3b3b';
        one.innerHTML = 'Поштова Площа 82';
        two.innerHTML = '123-45-67-890';
        changeMap.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.6516560371906!2d30.51983701596089!3d50.44758879545174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce56b2456d3b%3A0xd062ae171b57e947!2sKhreschatyk%20St%2C%20Kyiv%2C%2002000!5e0!3m2!1sen!2sua!4v1567686993971!5m2!1sen!2sua";
    }
}

window.onload = function() {
    window.addEventListener('scroll', function() {
        scroll = window.pageYOffset || document.documentElement.scroll;
        scroll > 200 ? document.querySelector('.topButton').classList.add('fixed') : document.querySelector('.topButton').classList.remove('fixed');
    });
}
$(document).ready(function() {
    // $('.slider-for').slick({
    //   centerMode: true,
    //  centerPadding: '200px',
    //  slidesToShow: 1,
    //  slidesToScroll: 3,
    //  arrows: false,
    //  // fade: true,
    //  asNavFor: '.slider-nav'
    // });
    // $('.slider-nav').slick({

    //  slidesToShow: 4,
    //  slidesToScroll: 1,
    //  asNavFor: '.slider-for',
    //  // dots: true,
    //  arrows:true,
    //  focusOnSelect: true
    // });

    $('.topButton').click(function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    // $('#dropdown-toggle-сastom').click(function(e) {
    //   $('.dropdown-container').stop().slideToggle('slow');
    //   e.preventDefault();
    // });
    $('.pop').click(function(e) {
        e.preventDefault();
        $(this).each(function() {
            $('.popup').show();
            $('.outer-pop-up').addClass('body-overlay');
            $('html').css('overflow', 'hidden');
            if ($(window).width() > 1024) {
                $('html').css('margin-right', '17px')
                $('.body-overlay').css('left', '0');
                $('.body-overlay').css('width', '101%');
            }
            var newSrc = $(this).css('background-image');
            $('.popup-items .new-photo').css('background-image', newSrc);
        })

        let newText = $(this).attr('class');
        let sifon = "Сифон" + "</br>" + "(кавовий вакуум)"
        switch (newText) {
        case 'articlesBlock_leftSide pop':
            $('.new-text h3').text('Пуровер (горнятко Hario)');
            $('.popup-text').text('Готуючи каву даним способом бариста поміщає паперовий фільтр в горня, засипає дрібно змелену каву, після чого заливає гарячою водою. В такий спосіб кава заварюється і фільтрується скапуючи в горня. Є можливість змінювати смак кави приготованої на такий манер в залежності від того, наскільки швидко заливається водою.');
            break;
        case 'articlesBlock_rightSide__first pop':
            $('.new-text h3').html(sifon);
            $('.popup-text').text('Для приготуванні кави за допомогою сифону у нижню колбу потрібно налити воду, закріплюєчи верхню колбу і підпалючи фітіль. У нижній частині утвориться пара, яка витіснить воду у верхню колбу, де вже є змелена кава. Час заварювання — 3 хв. Після усунення вогню в результаті зниження температури в нижній колбі напій відфільтрується і повернеться у нижню ємкість.');
            break;
        case 'articlesBlock_rightSide__second pop':
            $('.new-text h3').text('Кемекс');
            $('.popup-text').text('Завдяки цьому альтернативному способу готування кави напій виходить «лайтовий», навіть кажуть «солодшим». Для цього використовують кавову пробірку та паперові фільтри. Завдяки спеціальному помолу кави, часу протікання через отвори різного розміру кава має особливий смак.');
            break;
        case 'articlesBlock_rightSide__third pop':
            $('.new-text h3').text('Аеропрес');
            $('.popup-text').text('Для приготування кави використовують спеціальну колбу, в якій заварюється напій. Кава пропускається через фільтр під невеликим тиском. Даний спосіб схожий на каву, яка готується за допомогою френч-пресу, але готовий напій чистий з вираженим смаком.');
            break;
        }
    });

    $('.close-icon').click(function() {
        $('.popup').hide();
        $('.outer-pop-up').removeClass('body-overlay');
        $('html').css('overflow', 'auto')
    });
})
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });

}
$(".toggler-example").click(function() {
    $(".sub-menu").addClass("sub-menu-position");
    $(".hamburger-right").css('display', 'block')
});
$(".close-icon").click(function() {
    $(".sub-menu").removeClass("sub-menu-position");
    $(".hamburger-right").css('display', 'none')
});

$('.imageBlock img').on('click', function(e) {
    e.preventDefault();
    $('.pop-upp').slideDown(400);
    $('.body-overlayy').fadeIn(200);
    $('html').css('overflow', 'hidden');
    //   if ($(window).width() > 1024) {
    //     $('html').css('margin-right', '17px')
    //     $('.body-overlayy').css('left','0');
    //     $('.body-overlayy').css('width','101%');
    // }  
});
$(document).mouseup(function(e) {
    let container = $(".pop-upp");
    if (container.has(e.target).length === 0) {
        container.hide("slow");
        $('.body-overlayy').fadeOut(200);
        $('html').css('overflow', 'auto')
        // $('html').css('margin-right', '0px')
    }
});
