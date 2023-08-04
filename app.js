let tg = window.Telegram.WebApp;
const shopcart = [];
var totalprice = 0;
tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";
var elements = document.getElementsByClassName("btn");

var myFunction = function(event) {
    shopcart.push(event.srcElement.id);
	totalprice= totalprice + event.srcElement.price;
	tg.MainButton.setText("Всего на: "+ totalprice + " рублей.");
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}



Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});




