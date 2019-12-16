const TypeWriter = function(txtElement, words, wait){
  this.txtElement=txtElement;
  this.words=words;
  this.txt='';
  this.wordIndex = 0;
  this.wait = parseInt(wait,10);
  this.type();
this.isDeleting=false;
}

//type method
TypeWriter.prototype.type=function(){
//current index of word
const current = this.wordIndex % this.words.length;
//get full text of current words
const fullTxt = this.words[current];

//check if isDeleting
if(this.isDeleting){
  //remove character
  this.txt = fullTxt.substring(0, this.txt.length - 1)
} else {
  //add character
  this.txt = fullTxt.substring(0, this.txt.length + 1)
}

//insert txt into txtElement
this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//type speed
let typeSpeed = 200;
if(this.isDeleting){
  typeSpeed /= 2;
}

//if word is complete
if(!this.isDeleting && this.txt === fullTxt){
  //pause at end
  typeSpeed = this.wait;
  this.isDeleting = true;
}
 else if(this.isDeleting && this.txt === ''){
  this.isDeleting = false;
  //move to next word;
  this.wordIndex++;
  //pause before start typeing
  typeSpeed = 400;
}

  setTimeout(()=>this.type(), typeSpeed);
}
//initialize onload
document.addEventListener("DOMContentLoaded", init)

function init(){
  const txtElement = document.querySelector('.txt-type');
  const words=JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  new TypeWriter(txtElement, words, wait);
}

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
