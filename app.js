let tg = window.Telegram.WebApp;
let shopcart = [];
let totalprice = 0;
tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';
tg.MainButton.show();
let item = "";
var elements = document.getElementsByClassName("btn");

var ShowChests = function() {
    console.log("Show chests");
    HideAll();
    var elms = document.querySelectorAll("[id*='Chests_']");
    for (var i = 0; i < elms.length; i++)
        elms[i].parentElement.style.display = 'inline-block';
};

var ShowOthers = function() {
    console.log("Show chests");
    HideAll();
    var elms = document.querySelectorAll("[id*='Others_']");
    for (var i = 0; i < elms.length; i++)
        elms[i].parentElement.style.display = 'inline-block';
};

var ShowEventPasses = function() {
    console.log("Show chests");
    HideAll();
    var elms = document.querySelectorAll("[id*='EventPass_']");
    for (var i = 0; i < elms.length; i++)
        elms[i].parentElement.style.display = 'inline-block';
};

var ShowBundles = function() {
    HideAll();
    var elms = document.querySelectorAll("[id*='Bundles']");
    for (var i = 0; i < elms.length; i++)
        elms[i].parentElement.style.display = 'inline-block';
};

var HideAll = function() {
    elms = document.querySelectorAll("[class='item']");
    for (var i = 0; i < elms.length; i++) {
        elms[i].style.display = 'none';
    }
}

var myFunction = function(event) {
    shopcart.push(event.srcElement.id);
    totalprice = totalprice + parseInt(event.srcElement.innerHTML);
    console.log("Вы выбрали товара на " + totalprice + " рублей.!");
    console.log(shopcart.join(':'));
    tg.MainButton.setText("Вы выбрали товара на " + totalprice + " рублей.!");

};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}



Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(shopcart.join(':'));
});
