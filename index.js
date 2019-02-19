$("#modal-1").on("click",() => {
  $('.modalName').text(`STYLISH HOME white decision`);
  $('.modalText')
    .text(`Пример одностраничного сайта, выполненного в ярких, серых тонах. Компания STYLISH HOME, представленная на странице, является вымышленной. Все совпадения с реально существующими компаниями - случайны. Весь текст на странице представлен в качестве примера и не несет в себе никакого информационного посыла.`);
  $('.spanText').html('<span>Используемые технологии: </span> HTML5, CSS3, Bootstrap, Flexbox, CSS Grid, CSS transforms, Animate.css ');
  $('.modalImg')
    .html('<img class="imgUnderModel" src="../../img/portfolio/p1.jpg">')
  $('.modalLink')
    .attr('href','./components/site 1')
});
$("#modal-2").on("click",() => {
  $('.modalName').text(`SOUNDPLACE black decision`);
  $('.modalText')
    .text(`Пример одностраничного сайта, выполненного в тёмных тонах. Компания SOUNDPLACE, представленная на странице, является вымышленной. Все совпадения с реально существующими компаниями - случайны. Весь текст на странице представлен в качестве примера и не несет в себе никакого информационного посыла.`);
  $('.spanText').html('<span>Используемые технологии: </span> HTML5, CSS3, Bootstrap, Flexbox, CSS Grid, CSS transforms, Animate.css ');
  $('.modalImg')
    .html('<img class="imgUnderModel" src="../../img/portfolio/p2.jpg">')
  $('.modalLink')
    .attr('href','./components/site 2')
});
$("#modal-3").on("click",() => {
  $('.modalName').text(`STYLISH HOME dark decision`);
  $('.modalText')
    .text(`Пример одностраничного сайта, выполненного в тёмных, серых тонах. Компания STYLISH HOME, представленная на странице, является вымышленной. Все совпадения с реально существующими компаниями - случайны. Весь текст на странице представлен в качестве примера и не несет в себе никакого информационного посыла.`);
  $('.spanText').html('<span>Используемые технологии: </span> HTML5, CSS3, Bootstrap, Flexbox, CSS Grid, CSS transforms, Animate.css ');
  $('.modalImg')
    .html('<img class="imgUnderModel" src="../../img/portfolio/p3.jpg">')
  $('.modalLink')
    .attr('href','./components/site 3')
});
$("#modal-4").on("click",() => {
  $('.modalName').text(`STYLISH HOME colorful solution`);
  $('.modalText')
    .text(`Пример одностраничного сайта, выполненного в красочных, ярко-оранжевых тонах. Компания STYLISH HOME, представленная на странице, является вымышленной. Все совпадения с реально существующими компаниями - случайны. Весь текст на странице представлен в качестве примера и не несет в себе никакого информационного посыла.`);
  $('.spanText').html('<span>Используемые технологии: </span> HTML5, CSS3, Bootstrap, Flexbox, CSS Grid, CSS transforms, Animate.css ');
  $('.modalImg')
    .html('<img class="imgUnderModel" src="../../img/portfolio/p4.jpg">')
  $('.modalLink')
    .attr('href','./components/site 4')
});
$("#modal-5").on("click",() => {
  $('.modalName').text(`Star Claster`);
  $('.modalText')
    .text(`Пример одностраничного сайта с использованием JS и jQuery. Переход между страницами сайта осуществляется при помощи изменения содержимого блока <content> без перезагрузки страницы. Так же на сайте происходит рандомная генерация декоративных объектов (звёзд) при помощи JS и css.animation. Страница адаптирована под различные устройства и размеры экрана.`);
  $('.spanText').html('<span>Используемые технологии: </span> HTML5, CSS3, Bootstrap, Flexbox, CSS animation, JavaScript, jQuery');
  $('.modalImg')
    .html('<img class="imgUnderModel" src="../../img/portfolio/p5.jpg">')
  $('.modalLink')
    .attr('href','./components/site 5')
});
$("#modal-6").on("click",() => {
  $('.modalName').text(`Fractal Board`);
  $('.modalText')
    .text(`Пример одностраничного сайта с использованием JS и jQuery. Переход между страницами сайта осуществляется при помощи изменения содержимого блока <content> без перезагрузки страницы. Построение диаграмм осуществляется при помощи библиотеки Morris.js. Генерация и работа с таблицей осуществляется при помощи библиотеки MDB Bootstrap. Все данные таблицы берутся с удаленного источника jsonplaceholder.typicode.com. Страница адаптирована под различные устройства и размеры экрана.`);
  $('.spanText').html('<span>Используемые технологии: </span> HTML5, CSS3, MDB Bootstrap, SVG, Morris.js, AJAX, JSON');
  $('.modalImg')
    .html(`<img class="imgUnderModel" src="../../img/portfolio/p6.jpg">
    <img class="imgUnderModel" src="../../img/portfolio/p6-1.jpg">`)
  $('.modalLink')
    .attr('href','./components/site 6')
});

$('div.web-works').show(300);
$('div.ui-works').fadeOut(100);

function showHide(name) {
  if (name == "Web-design") {
    $('div.web-works').show(300);
    $('div.ui-works').fadeOut(100);
  }else{
    $('div.ui-works').show(300);
    $('div.web-works').fadeOut(100);
  }
}


$('.portfolio ul li').on("click",(e) => {
  if (e.target.className == 'active') {
    $('.portfolio ul li').removeClass('disabled');
    e.target.className = 'disabled'
    showHide(e.target.innerHTML);
  }else{
    $('.portfolio ul li').removeClass('active');
    e.target.className = 'active'
    showHide(e.target.innerHTML);
  }
});

let scrollCent = 0.002;
let exp = $(document).scrollTop() * scrollCent

function navScroll(exp, scrollCent) {
  if ($(document).scrollTop() <= 100) {
    exp = $(document).scrollTop() * scrollCent;
  }else exp = 0.25;
  $('.transBg').css({
    backgroundColor: `rgba(136, 136, 136, ${exp})`
  });
}

$(document).on('scroll',() => {
  navScroll(exp, scrollCent)
  let punct = $('#engLang').offset().top - 150;
  if ($(document).scrollTop() >= punct ){
    $(".up-button").fadeIn(300)
  }else $(".up-button").fadeOut(100)
});

$('.up').on('click',function() {
  $('html, body').animate({ scrollTop: 0 }, 500);
});

$('#nav-home').on('click',function() {
  $('html, body').animate({ scrollTop: 0 }, 500);
});

$('#nav-portfolio').on('click',function() {
  let punct = $('#portfolio').offset().top;
  $('html, body').animate({ scrollTop: punct }, 500);
});

$('#nav-about').on('click',function() {
  let punct = $('#about').offset().top;
  $('html, body').animate({ scrollTop: punct }, 500);
});
