//menu section effect
var leafSection = document.getElementsByClassName("leafSection");
var menuSection = document.getElementsByClassName("menuSection");

menuSection[2].onmouseover = function(){
  for (var i = 0; i < leafSection.length; i++) {
        leafSection[i].classList.remove("hover");
      }
      leafSection[0].classList.add("hover");
      this.style.animation = "menuEffect .5s forwards";
}
menuSection[0].onmouseover = function(){
  for (var i = 0; i < leafSection.length; i++) {
        leafSection[i].classList.remove("hover");
      }
      leafSection[1].classList.add("hover");
      this.style.animation = "menuEffect .5s forwards";
}
menuSection[3].onmouseover = function(){
  for (var i = 0; i < leafSection.length; i++) {
        leafSection[i].classList.remove("hover");
      }
      leafSection[2].classList.add("hover");
      this.style.animation = "menuEffect .5s forwards";
}
menuSection[1].onmouseover = function(){
  for (var i = 0; i < leafSection.length; i++) {
        leafSection[i].classList.remove("hover");
      }
      leafSection[3].classList.add("hover");
      this.style.animation = "menuEffect .5s forwards";
}
menuSection[4].onmouseover = function(){
  for (var i = 0; i < leafSection.length; i++) {
        leafSection[i].classList.remove("hover");
      }
      leafSection[4].classList.add("hover");
      this.style.animation = "menuEffect .5s forwards";
}

for (var j = 0; j < menuSection.length; j++) {
  menuSection[j].onmouseout = function(){
    this.style.animation = "";
  }
}

//back to menu
var logo = document.getElementById("logo");
var subPage = document.getElementById("subPage");
var menu = document.getElementById("menu");

logo.addEventListener("click", backToMenu);

function backToMenu(){
  if (menu.style.display!="block"){
    subPage.style.display = "none";
    menu.style.display = "block";
  } else {
    window.location.href="index.html";
  }
}
