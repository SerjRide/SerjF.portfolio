setInterval(() => {

  let random_1 = Math.floor(Math.random() * 25);
  let random_2 = Math.floor(Math.random() * 75);
  let random_3 = Math.floor(Math.random() * 75);
  let random_4 = Math.floor(Math.random() * 100);

  $('#star-anim').html(`
    #star {
      position: absolute;
      width: 3px;
      height: 3px;
      box-shadow: 0 0 20px 1px white;
      border-radius: 100%;
      background-color: white;
      animation: drop 2s linear;
      opacity: 0;
    }

    @keyframes drop{
      0% {
        top:${random_1}%;
        left:${random_2}%;
        opacity: 0;
      }
      15%, 50% {
        opacity: 1;
      }
      75%, 100% {
        opacity: 0;
      }
      100% {
        top:${random_3}%;
        left:${random_4}%;
      }
    }`)

},2000);

setInterval(() => {

    $('#star-anim').html('');

},4000);
