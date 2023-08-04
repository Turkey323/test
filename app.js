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
  HideAll();
var elms = document.querySelectorAll("[id*='Chests']");
for(var i = 0; i < elms.length; i++) 
  elms[i].parentElement.style.display='inline-block'; 
};

var ShowBundles = function(){
  HideAll();
var elms = document.querySelectorAll("[id*='Bundles']");
for(var i = 0; i < elms.length; i++) 
  elms[i].parentElement.style.display='inline-block'; 
};

var ShowOthers = function(){
  HideAll();
var elms = document.querySelectorAll("[id*='Others']");
for(var i = 0; i < elms.length; i++) 
  elms[i].parentElement.style.display='inline-block'; 
};

var ShowEventPasses = function(){
  HideAll();
var elms = document.querySelectorAll("[id*='EventPass']");
for(var i = 0; i < elms.length; i++) 
  elms[i].parentElement.style.display='inline-block'; 
};


var HideAll = function(){
document.getElementsByClassName("inner")[0].style.display = 'none';
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


