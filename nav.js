const link = 'serjride.github.io'
$('#import-nav').html(
  `<div class="transBg"></div>
  <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="/">
      <img width="25"
        src="./img/logo_black.png"
        alt="logo"/>
    </a>
    <button class="navbar-toggler"
      type="button" data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto "></ul>
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a id="nav-home" class="nav-link" href="#">HOME</a>
        </li>
        <li class="nav-item active">
          <a id="nav-portfolio" class="nav-link" href="#portfolio">PORTFOLIO</a>
        </li>
        <li id="nav-about" class="nav-item active">
          <a class="nav-link" href="#about">ABOUT</a>
        </li>
      </ul>
    </div>
  </nav>`
);
