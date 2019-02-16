
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

  function resize() {
    const size = $(document).width();
    switch (true) {
      case size >= 949 :
        $('.my-container').css({'height':'143%'});
        break;
      case size < 949 && size > 781:
        $('.my-container').css({'height':'148%'});
        break;
      case size < 781 && size > 724:
        $('.my-container').css({'height':'144%'});
        break;
      case size < 724 && size > 369:
        $('.my-container').css({'height':'157%'});
        break;
      case size < 369 && size > 349:
        $('.my-container').css({'height':'161%'});
        break;
      case size < 349 && size > 320:
        $('.my-container').css({'height':'200%'});
        break;
      default: $('.my-container').css({'height':'200%'});
    };
    console.log(size);
    console.log(size > 949);
  }

  $(".menu-button").on('click',() => {
    $('.hidde-gallery').hide('blind', 100);
    $('.logo').hide("fade", 300);
    $('.contant').show('blind', 100);
    resize();
    $(window).resize(function(){
      resize();
    });
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
    resize();
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
