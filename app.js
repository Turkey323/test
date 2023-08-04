let tg = window.Telegram.WebApp;
let shopcart = [];
let totalprice = 0;
tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';
tg.MainButton.show();
let item = "";
var elements = document.getElementsByClassName("btn");

var myFunction = function(event) {
    shopcart.push(event.srcElement.id);
	console.log(shopcart);
	totalprice= totalprice + parseInt(event.srcElement.innerHTML);
	usercard.innerHTML = "Всего на: "+ totalprice + " рублей.";
		tg.MainButton.setText("Вы выбрали товара на "+ totalprice + " рублей.!");
		
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}



Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(shopcart);
});

let usercard = document.getElementById("usercard");
let p = document.createElement("p");


