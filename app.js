let tg = window.Telegram.WebApp;
let shopcart = [];
let totalprice = 0;
tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";
var elements = document.getElementsByClassName("btn");

var myFunction = function(event) {
	tg.sendData("Всего на: "+ totalprice + " рублей.");
    shopcart.push(event.srcElement.id);
	totalprice= totalprice + parseInt(event.srcElement.innerHTML);
	tg.MainButton.setText("Всего на: "+ totalprice + " рублей.");
	usercard.innerHTML = "Всего на: "+ totalprice + " рублей.";
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}



Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(shopcart);
});

let usercard = document.getElementById("usercard");
let p = document.createElement("p");


