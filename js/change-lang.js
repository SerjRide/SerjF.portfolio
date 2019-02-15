$('.changeLang input').on("click",(e) => {
  e.target.id == 'engLang' ?
  e.target.id = 'ruLang' :
  e.target.id = 'engLang'
});
