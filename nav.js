const link = 'serjride.local'
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
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"
            href="#" id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            WORKS
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item"
              href="http://${link}/components/site%201/">
              SH white decision
            </a>
            <a class="dropdown-item"
              href="http://${link}/components/site%202/">
              SP black decision
            </a>
            <a class="dropdown-item"
              href="http://${link}/components/site%203/">
              SH dark decision
            </a>
            <a class="dropdown-item"
              href="http://${link}/components/site%204/">
              SH colorful solution
            </a>
          </div>
        </li>
      </ul>
    </div>
  </nav>`
);
