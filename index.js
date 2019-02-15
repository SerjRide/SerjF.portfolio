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
