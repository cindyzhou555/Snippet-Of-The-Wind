//title page wind blowing effect
window.addEventListener("load",function(event){
  var texts=document.getElementsByClassName("letters");
  var numOfTexts = texts.length;
  var letterPositions=[];
  for(var i=0;i<numOfTexts;i++){
    letterPositions.push(0);
    var letters=texts[i].innerText.replace(new RegExp('','gi'),"</span><span>");
    texts[i].innerHTML=letters.substring(7, letters.length-6)
    }

    setInterval(function(){
      for (var i=0;i<numOfTexts;i++){
        var j=letterPositions[i];
        if(j>=0){
          texts[i].childNodes[j].classList.add("focus");
          if(j==0){
            texts[i].classList.remove("minusOne");
            texts[i].childNodes[texts[i].childNodes.length-1].classList.remove("focus");
          } else {
            texts[i].childNodes[j-1].classList.remove("focus");
          }
          if(j==(texts[i].childNodes.length-2)){
            texts[i].classList.add("minusTwo");
          } else if (j==(texts[i].childNodes.length-1)){
            texts[i].classList.add("minusOne");
                      texts[i].classList.remove("minusTwo");
          }
        }
        letterPositions[i]=(++letterPositions[i])%texts[i].childNodes.length;
      }
    },200)
});

//menu hover effect
var section = document.getElementsByClassName("section");
var sectionName = document.getElementsByClassName("sectionName");

for (var i = 0; i < section.length; i++) {
  hoverSection(i);
  }

function hoverSection() {
  section[i].onmouseover = function() {
    for (j = 0; j < section.length; j++) {
      section[j].classList.remove("hover");
    }
    this.classList.add("hover");
  }
  section[i].onmouseout = function() {
    for (j = 0; j < section.length; j++) {
      section[j].classList.remove("hover");
    }
  }
}



// switch(i){
//   case 0:
//   sectionName[2].style.visibility="visible";
//   break;
//   case 1:
//   sectionName[0].style.visibility="visible";
//   break;
//   case 2:
//   sectionName[3].style.visibility="visible";
//   break;
//   case 3:
//   sectionName[1].style.visibility="visible";
//   break;
//   case 4:
//   sectionName[4].style.visibility="visible";
//   break;
// }

// if (i==0){
//     sectionName[2].style.visibility="visible";
// } else if (i==1) {
//     sectionName[0].style.visibility="visible";
// } else if (i==2) {
//     sectionName[3].style.visibility="visible";
// } else if (i==3) {
//     sectionName[1].style.visibility="visible";
// } else {
//     sectionName[4].style.visibility="visible";
// }
