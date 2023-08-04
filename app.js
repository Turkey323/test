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
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}



Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);


