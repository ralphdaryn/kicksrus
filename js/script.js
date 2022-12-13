// Close Navigation Menu
window.onload = function () {
  const chk = document.getElementById("navi-toggle");
  const menuLinks = document.querySelectorAll(
    ".navigation__list .navigation__item"
  );
  menuLinks.forEach(function (item) {
    item.addEventListener("click", function () {
      chk.checked = false;
    });
  });
};
