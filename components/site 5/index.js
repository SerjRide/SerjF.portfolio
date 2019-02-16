
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
    $('.logo').hide("fade", 300);
  })
