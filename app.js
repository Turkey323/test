let tg = window.Telegram.WebApp;
let shopcart = [];
let totalprice = 0;
tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';
tg.MainButton.show();
let item = "";
var elements = document.getElementsByClassName("btn");

var ShowChests = function(){
  console.log("Show chests");
  HideAll();
  var elms = document.querySelectorAll("[id*='Chests']");
for(var i = 0; i < elms.length; i++) 
  elms[i].parentElement.style.display='inline-block'; 
};



var HideAll = function(){
elms = document.querySelectorAll("[class='item']");
for(var i = 0; i < elms.length; i++) 
  {
  elms[i].parentElement.style.display='inline-block'; 
  }
}

var myFunction = function(event) {
    shopcart.push(event.srcElement.id);
    totalprice = totalprice + parseInt(event.srcElement.innerHTML);
    tg.MainButton.setText("Вы выбрали товара на " + totalprice + " рублей.!");

};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}



Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(shopcart.join(':'));
});


