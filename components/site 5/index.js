
  const bar = $('.slide-bar');
  const tags = $('.tag-bar');
  bar.hide();
  tags.hide();


  $('#menu').on('click',() => {
    const ident = bar[0].className;
    bar.toggleClass('disabled active');
    tags.removeClass('active').addClass('disabled');

    if (ident == 'slide-bar disabled') {
      bar.show("blind", 100);
      tags.hide("blind", 1);
    }else bar.hide("blind", 100);
  });

  $('#tags').on('click',() => {
    const ident = tags[0].className;
    tags.toggleClass('disabled active');
    bar.removeClass('active').addClass('disabled');

    if (ident == 'tag-bar disabled') {
      tags.show("blind", 100);
      bar.hide("blind", 1);
    }else tags.hide("blind", 100);
  });



  $(".menu-button").on('click',() => {
    $('.hidde-gallery').hide('blind', 100);
    $('.logo').hide("fade", 300);
    $('.contant').show('blind', 100);
  });

  $("#info").on('click',() => {
    $('#pic').attr('src','../../img/site5/article.png');
  });

  $("#prog").on('click',() => {
    $('#pic').attr('src','../../img/site5/prog.png');
  });

  $("#part").on('click',() => {
    $('#pic').attr('src','../../img/site5/part.png');
  });

  $("#place").on('click',() => {
    $('#pic').attr('src','../../img/site5/place.png');
  });

  $("#gallery").on('click',() => {
    $('.logo').hide("fade", 300);

    $('.contant').hide('blind', 100);
    $('.hidde-gallery').show('blind', 300);
  });

  $("#prop").on('click',() => {
    $('#pic').attr('src','../../img/site5/prop.png');
  });

  $('.my-container').on('click',() => {
    $(document).scrollTop(0);
    bar.hide("blind", 100);
    tags.hide("blind", 100);
    $('.hidde-gallery').hide('blind', 100);
    $('.contant').hide('blind', 100);
    bar.removeClass('active').addClass('disabled');
    tags.removeClass('active').addClass('disabled');
    $('.logo').show("fade", 2000);
    $('.my-container').css({'height':'100%'});
  });

  $(`.article-container, .hidde-gallery, .my-container,
    .tag-bar a, .menu-button, #gallery`).on('click',() => {
    bar.hide("blind", 100);
    tags.hide("blind", 100);
    bar.removeClass('active').addClass('disabled');
    tags.removeClass('active').addClass('disabled');
  });
