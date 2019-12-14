//title page wind blowing effect
window.addEventListener("load", function(event) {
  var texts = document.getElementsByClassName("letters");
  var numOfTexts = texts.length;
  var letterPositions = [];
  for (var i = 0; i < numOfTexts; i++) {
    letterPositions.push(0);
    var letters = texts[i].innerText.replace(new RegExp('', 'gi'), "</span><span>");
    texts[i].innerHTML = letters.substring(7, letters.length - 6)
  }

  setInterval(function() {
    for (var i = 0; i < numOfTexts; i++) {
      var j = letterPositions[i];
      if (j >= 0) {
        texts[i].childNodes[j].classList.add("focus");
        if (j == 0) {
          texts[i].classList.remove("minusOne");
          texts[i].childNodes[texts[i].childNodes.length - 1].classList.remove("focus");
        } else {
          texts[i].childNodes[j - 1].classList.remove("focus");
        }
        if (j == (texts[i].childNodes.length - 2)) {
          texts[i].classList.add("minusTwo");
        } else if (j == (texts[i].childNodes.length - 1)) {
          texts[i].classList.add("minusOne");
          texts[i].classList.remove("minusTwo");
        }
      }
      letterPositions[i] = (++letterPositions[i]) % texts[i].childNodes.length;
    }
  }, 200)
});

//menu section effect
var section = document.getElementsByClassName("section");
var menuSection = document.getElementsByClassName("menuSection");

menuSection[2].onmouseover = function(){
  for (var i = 0; i < section.length; i++) {
        section[i].classList.remove("hover");
      }
      section[0].classList.add("hover");
      this.style.animation = "menuEffect .5s forwards";
}
menuSection[0].onmouseover = function(){
  for (var i = 0; i < section.length; i++) {
        section[i].classList.remove("hover");
      }
      section[1].classList.add("hover");
      this.style.animation = "menuEffect .5s forwards";
}
menuSection[3].onmouseover = function(){
  for (var i = 0; i < section.length; i++) {
        section[i].classList.remove("hover");
      }
      section[2].classList.add("hover");
      this.style.animation = "menuEffect .5s forwards";
}
menuSection[1].onmouseover = function(){
  for (var i = 0; i < section.length; i++) {
        section[i].classList.remove("hover");
      }
      section[3].classList.add("hover");
      this.style.animation = "menuEffect .5s forwards";
}
menuSection[4].onmouseover = function(){
  for (var i = 0; i < section.length; i++) {
        section[i].classList.remove("hover");
      }
      section[4].classList.add("hover");
      this.style.animation = "menuEffect .5s forwards";
}

for (var j = 0; j < menuSection.length; j++) {
  menuSection[j].onmouseout = function(){
    this.style.animation = "";
  }
}

// for (var i = 0; i < section.length; i++) {
//   hoverSection(i);
// }
//
// function hoverSection() {
//   if (i == 0) {
//     section[i].onmouseover = function() {
//       for (j = 0; j < section.length; j++) {
//         section[j].classList.remove("hover");
//       }
//       this.classList.add("hover");
//       informationSection[2].style.visibility = "visible";
//       informationSection[2].style.animation = "informationSection 2s";
//     }
//   } else if (i == 1) {
//     section[i].onmouseover = function() {
//       for (j = 0; j < section.length; j++) {
//         section[j].classList.remove("hover");
//       }
//       this.classList.add("hover");
//       informationSection[0].style.visibility = "visible";
//       informationSection[0].style.animation = "informationSection 2s";
//     }
//   } else if (i == 2) {
//     section[i].onmouseover = function() {
//       for (j = 0; j < section.length; j++) {
//         section[j].classList.remove("hover");
//       }
//       this.classList.add("hover");
//       informationSection[3].style.visibility = "visible";
//       informationSection[3].style.animation = "informationSection 2s";
//     }
//   } else if (i == 3) {
//     section[i].onmouseover = function() {
//       for (j = 0; j < section.length; j++) {
//         section[j].classList.remove("hover");
//       }
//       this.classList.add("hover");
//       informationSection[1].style.visibility = "visible";
// informationSection[1].style.animation = "informationSection 2s";
//     }
//   } else if (i == 4) {
//     section[i].onmouseover = function() {
//       for (j = 0; j < section.length; j++) {
//         section[j].classList.remove("hover");
//       }
//       this.classList.add("hover");
//       informationSection[4].style.visibility = "visible";
// informationSection[4].style.animation = "informationSection 2s";
//     }
//   }
// }

//studio logo link
var logo = document.getElementById("logo");
var menu = document.getElementById("menu");
var title = document.getElementById("title");

function toggleMenu(){
  if (menu.style.display!="block"){
    title.style.display="none";
    menu.style.display="block";
  }
  else {
    title.style.display="block";
    menu.style.display="none";
  }
}

logo.addEventListener("click", toggleMenu);
