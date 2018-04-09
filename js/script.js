headerBurger.onclick = function expandMenu() {
  var headerNav = document.getElementById('headerNav');

  let headerNavClass = headerNav.classList;

  console.log(headerNavClass);


  if (headerNav.className === "header-top__nav") {
      headerNav.className += " responsive";
  } else {
    headerNavClass.remove("responsive");
  }

  console.log(headerNavClass);

}
