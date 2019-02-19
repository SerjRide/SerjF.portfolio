function parseLi(){
  let allLi = $('li.nav-item');
  for (let i = 0; i < allLi.length; i++) {
    allLi[i].className = 'nav-item';
  }
};

$('.nav-link.my').on('click',(e) => {
  let parrent = e.target.parentElement;
  parseLi();
  if (parrent.className == 'nav-item'){
    parrent.className = 'nav-item active'
  }else parrent.className = 'nav-item';
});

const home = `
  <div class="jumbotron text-center mdb-color
                lighten-2 white-text mx-2 mb-5">
    <h2 class="card-title h2">Welcom to the SerjRide dashboard</h2>
    <p class="my-4 h6">Lorem ipsum dolor sit amet</p>
    <div class="row d-flex justify-content-center">
      <div class="col-xl-7 pb-2">
        <p class="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Fuga aliquid dolorem ea distinctio exercitationem delectus
          qui, quas eum architecto, amet quasi accusantium, fugit
          consequatur ducimus obcaecati numquam molestias hic itaque
          accusantium doloremque laudantium, totam rem aperiam.</p>
      </div>
    </div>
    <hr class="my-4 rgba-white-light">
    <div class="pt-2">
      <button class="btn btn-outline-white btn-dash">Dashbord
        <i class="fas fa-chart-pie"></i>
      </button>
      <button class="btn btn-outline-white btn-tables">Tables
        <i class="fas fa-table"></i>
      </button>
    </div>
  </div>
  `;

const about = `
<div class="jumbotron mdb-color
              lighten-2 white-text mx-2 mb-5">
  <div class="about white-text">
  <h2 class="card-title h2">About Us</h2>
    <div class="col-xl-7 pb-2">
      <p class="card-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Fuga aliquid dolorem ea distinctio exercitationem delectus
        qui, quas eum architecto, amet quasi accusantium, fugit
        consequatur ducimus obcaecati numquam molestias hic itaque
        accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>
  </div>
  </div>
  `;

const news = `
<div class="jumbotron mdb-color lighten-2 white-text news">
<a href="#">17.02.2019</a>
<h2 class="card-title h2">Latest News</h2>
<img class="img-fluid" src="./img/about.jpg" alt="article"/>
    <div class="col-xl-12 pb-2 my">
    <p class="card-text text-justify">Приятно, граждане, наблюдать, как
    представители современных социальных резервов разоблачены. Следует
    отметить, что разбавленное изрядной долей эмпатии, рациональное
    мышление позволяет выполнить важные задания по разработке вывода
    текущих активов. Прежде всего, укрепление и развитие внутренней
    структуры способствует повышению качества существующих финансовых
    и административных условий. Равным образом, современная
    методология разработки требует от нас анализа системы обучения
    кадров, соответствующей насущным потребностям. Также как начало
    повседневной работы по формированию позиции влечет за собой
    процесс внедрения и модернизации инновационных методов управления
    процессами. Противоположная точка зрения подразумевает, что
    сторонники тоталитаризма в науке призывают нас к новым свершениям,
    которые, в свою очередь, должны быть описаны максимально подробно.
    Вот вам яркий пример современных тенденций - синтетическое
    тестирование напрямую зависит от укрепления моральных ценностей.
    Банальные, но неопровержимые выводы, а также предприниматели в
    сети интернет заблокированы в рамках своих собственных
    рациональных ограничений. И нет сомнений, что диаграммы связей
    набирают популярность среди определенных слоев населения, а
    значит, должны быть представлены в исключительно положительном
    свете. В своем стремлении улучшить пользовательский опыт мы
    упускаем, что явные признаки победы институциализации неоднозначны
    и будут преданы социально-демократической анафеме. Таким образом,
    убежденность некоторых оппонентов однозначно определяет каждого
    участника как способного принимать собственные решения касаемо
    своевременного выполнения сверхзадачи...</p>
    </div>
  </div>
  `;

  const contact = `
    <div class="jumbotron text-center mdb-color
                  lighten-2 white-text mx-2 mb-5 contact row">
        <div class="col-md-6">
          <h2>Contact Us</h2>
          <p class='text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Fuga aliquid dolorem ea distinctio exercitationem delectus
            qui, quas eum architecto.</p>
          <p class='text-left'><b>Tel:</b> +7 (482) 123-45-67</p>
          <p class='text-left'>
            <b>E-mail:</b> quicksquicks6@gmail.com
          </p>
          <p class='text-left'><b>Adress:</b> Moskow </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203287.04537838697!2d37.4545955396349!3d55.74081882486453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1550411482748"
            width="100%" height="215px"
            style="border:0" allowfullscreen>
          </iframe>
        </div>
        <div class="col-md-6 pb-2">
          <form class="text-center">
            <p class="h4 mb-4"></p>
            <input type="text" id="defaultContactFormName"
              class="form-control mb-4 my" placeholder="Name">
            <input type="email" id="defaultContactFormEmail"
              class="form-control mb-4 my" placeholder="E-mail">
            <label>Subject</label>
            <select class="browser-default custom-select mb-4 my">
              <option value="" disabled>Choose option</option>
              <option value="1" selected>Feedback</option>
              <option value="2">Report a bug</option>
              <option value="3">Feature request</option>
              <option value="4">Feature request</option>
            </select>
            <div class="form-group">
              <textarea class="form-control rounded-0 my"
                id="exampleFormControlTextarea2" rows="3"
                placeholder="Message"></textarea>
            </div>
            <div class="custom-control custom-checkbox mb-4">
              <input type="checkbox"
                class="custom-control-input my"
                id="defaultContactFormCopy">
              <label class="custom-control-label"
                for="defaultContactFormCopy">
                  Send me a copy of this message
              </label>
            </div>
            <button class="btn btn-outline-elegant btn-block" type="submit">
              Send
            </button>
          </form>
        </div>
    </div>
    `;

  const dashbord = `
    <div class="jumbotron mdb-color lighten-2 white-text dash">
      <div class="row">

      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="row">

              <div class="col-md-4"
                <h2 class="card-title">Statistics</h2>
                <h3 class="card-text">Welcom to the SerjRide dashboard</h3>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>

              <div class="col-md-2 my"
                <h2 class="card-title">Statistics</h2>
                <section>$3,700 <small>70%</i></small>

              </div>

              <div class="col-md-2 my"
                <h2 class="card-title">New Orders</h2>
                <section>7 <small>35%</i></small>
              </div>

              <div class="col-md-2 my"
                <h2 class="card-title">Pre Chart</h2>
                <section>824 <small>14%</i></small>
              </div>

              <div class="col-md-2 my"
                <h2 class="card-title">Delivered</h2>
                <section>85 <small>17%</i></small>
              </div>

            </div>
          </div>
        </div>
      </div>

        <div class="col-md-7">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                <i class="fas fa-signal"></i>
                Statistics
              </h5>
              <div id="statistics" style="height: 250px;"></div>
              <a class="btn-outlne-info">Random values</a>
            </div>
          </div>
        </div>

        <div class="col-md-5">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                <i class="fas fa-signal"></i>
                Pre Chart
              </h5>
              <div id="preChart" style="height: 250px;"></div>
              <a class="btn-outlne-info">Random values</a>
            </div>
          </div>
        </div>

        <div class="col-md-7">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                <i class="fas fa-signal"></i>
                Goals
              </h5>
              <div id="goals" style="height: 250px;"></div>
              <a class="btn-outlne-info">Random values</a>
            </div>
          </div>
        </div>

        <div class="col-md-5">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                <i class="fas fa-signal"></i>
                Area Chart
              </h5>
              <div id="areaChart" style="height: 250px;"></div>
              <a class="btn-outlne-info">Random values</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;

  const tables = `
    <div class="jumbotron mdb-color lighten-2 white-text news">
    <table id="dtMaterialDesignExample"
      class="table table-striped table-responsive"
      cellspacing="0"
      width="100%">
      <thead>
      <tr>
        <th class="th-sm">userId</th>
        <th class="th-sm">id</th>
        <th class="th-sm">title</th>
        <th class="th-sm">body</th>
      </tr>
    </thead>
        <tbody id="tr"></tbody>
      </table>
    </div>
  `;

$('.content').html(home);

$('#home').on('click',() => {
  location.reload();
});

$('#about').on('click',() => {
  $('.content').html(about);
});

$('#news').on('click',() => {
  $('.content').html(news);
});

$('#contact').on('click',() => {
  $('.content').html(contact);
});

$('.btn-dash').on('click',() => {
  parseLi();
  $('.content').html(dashbord);

  new Morris.Line({
    element: 'statistics',
    data: [
      {q: '2009 Q3', a: 12, b: 9},
      {q: '2010 Q2', a: 22, b: 12},
      {q: '2010 Q3', a: 34, b: 24},
      {q: '2011 Q1', a: 43, b: 34},
      {q: '2011 Q3', a: 86, b: 44},
      {q: '2011 Q4', a: 45, b: 43},
      {q: '2012 Q2', a: 32, b: 32},
      {q: '2013 Q2', a: 24, b: 33},
      {q: '2014 Q2', a: 57, b: 31},
      {q: '2015 Q2', a: 68, b: 12},
      {q: '2016 Q2', a: 79, b: 8},
      {q: '2017 Q2', a: 81, b: 8},
      {q: '2018 Q2', a: 64, b: 6},
      {q: '2019 Q2', a: 22, b: 2}
    ],
    xkey: 'q',
    ykeys: ['a', 'b'],
    labels: ['Series A', 'Series B'],
    lineColors: ['#FFFFFF','#9491C7'],
    fillOpacity: 0.5,
    hideHover: true,
    pointSize: 2,
    lineWidth: 2,
    resize: true
  });

  new Morris.Donut({
    element: 'preChart',
    data: [
      {label: "Download Sales",value: 12},
      {label: "In-Store Sales",value: 30},
      {label: "Mail-Order Sales",value: 20}],
    colors: ['#3449FF','#52B1FF','#F6BC4B'],
    resize: true
  });

  new Morris.Bar({
    element: 'goals',
    data: [
      {y: '2017',a: 13,b: 22,c: 12,d: 23},
      {y: '2017',a: 23,b: 32,c: 22,d: 32},
      {y: '2017',a: 33,b: 42,c: 32,d: 43},
      {y: '2017',a: 43,b: 52,c: 42,d: 54},
      {y: '2017',a: 53,b: 62,c: 52,d: 65},
      {y: '2017',a: 63,b: 72,c: 62,d: 76},
      {y: '2017',a: 73,b: 82,c: 72,d: 86},
      {y: '2017',a: 63,b: 72,c: 62,d: 75},
      {y: '2017',a: 53,b: 62,c: 52,d: 54},
      {y: '2017',a: 43,b: 52,c: 42,d: 43},
      {y: '2017',a: 23,b: 32,c: 22,d: 42},
      {y: '2017',a: 13,b: 22,c: 12,d: 22},
      {y: '2018',a: 3,b: 12,c: 2,d: 23},
      {y: '2019',a: 13,b: 2,c: 12,d: 12}
    ],
    xkey: 'y',
    ykeys: ['a', 'b', 'c', 'd'],
    labels: ['Series A', 'Series B', 'Seruies C', 'Series D'],
    barColors: ['#F99D00','#E20909','#326F0C','#3297A8'],
    hideHover: 'auto',
    resize: true
  });

  new Morris.Area({
    element: 'areaChart',
    data: [
      {period: '2010 Q1',iphone: 2666,ipad: null,itouch: 2647},
      {period: '2011 Q2',iphone: 2778,ipad: 2294,itouch: 2441},
      {period: '2012 Q3',iphone: 4912,ipad: 1969,itouch: 2501},
      {period: '2013 Q4',iphone: 3767,ipad: 3597,itouch: 5689},
      {period: '2014 Q1',iphone: 6810,ipad: 1914,itouch: 2293},
      {period: '2015 Q2',iphone: 5670,ipad: 4293,itouch: 1881},
      {period: '2016 Q3',iphone: 4820,ipad: 3795,itouch: 1588},
      {period: '2017 Q4',iphone: 15073,ipad: 5967,itouch: 5175},
      {period: '2018 Q1',iphone: 10687,ipad: 4460,itouch: 2028},
      {period: '2019 Q2',iphone: 8432,ipad: 5713,itouch: 1791}
    ],
    xkey: 'period',
    ykeys: ['iphone', 'ipad', 'itouch'],
    labels: ['iPhone', 'iPad', 'iPod Touch'],
    lineColors: ['#4FABFF','#FF6253','#F69546'],
    fillOpacity: 0.5,
    hideHover: true,
    pointSize: 2,
    lineWidth: 2,
    resize: true
  });

});

$('#prof').on('click',() => {
  $('.content').html(prof);
});

$('.btn-tables').on('click',() => {
  parseLi();
  const url = 'http://jsonplaceholder.typicode.com/posts';

  const getPosts = async (url) => {
    const res = await fetch(url);
    const body = await res.json();

    $(document).ready(() => {
      $('#dtMaterialDesignExample').DataTable();
      $('#dtMaterialDesignExample_wrapper')
        .find('label')
        .each(function () {
          $(this).parent().append($(this).children());
        });
      $('#dtMaterialDesignExample_wrapper .dataTables_filter')
        .find('input')
        .each(function () {
          $('input').attr("placeholder", "Search");
          $('input').removeClass('form-control-sm');
        });
      $('#dtMaterialDesignExample_wrapper .dataTables_length')
        .addClass('d-flex flex-row');
      $('#dtMaterialDesignExample_wrapper .dataTables_filter')
        .addClass('md-form');
      $('#dtMaterialDesignExample_wrapper select').removeClass(
        'custom-select custom-select-sm form-control form-control-sm');
      $('#dtMaterialDesignExample_wrapper select')
        .addClass('mdb-select');
      $('#dtMaterialDesignExample_wrapper .dataTables_filter')
        .find('label').remove();
    });
    return body;
  };

  getPosts(url)
  .then((body) => {
    for (let i = 0; i < body.length; i++) {
      $('#tr').prepend(`
        <tr class="table-el">
          <td>${body[i].userId}</td>
          <td>${body[i].id}</td>
          <td>${body[i].title}</td>
          <td>${body[i].body}</td>
        </tr>
      `);
    };
  });

  $('.content').html(tables);

});

$('#maps').on('click',() => {
  $('.content').html(maps);
});

$('#orders').on('click',() => {
  $('.content').html(orders);
});
