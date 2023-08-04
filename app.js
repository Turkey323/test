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

var ShowSkins = function() {
    console.log("Show Skins");
    HideAll();
    var elms = document.querySelectorAll("[id*='Skins_']");
    for (var i = 0; i < elms.length; i++)
        elms[i].parentElement.style.display = 'inline-block';
};

var ShowOthers = function() {
    console.log("Show Others");
    HideAll();
    var elms = document.querySelectorAll("[id*='Others_']");
    for (var i = 0; i < elms.length; i++)
        elms[i].parentElement.style.display = 'inline-block';
};

var ShowEventPasses = function() {
    console.log("Show EventPasses");
    HideAll();
    var elms = document.querySelectorAll("[id*='EventPass_']");
    for (var i = 0; i < elms.length; i++)
        elms[i].parentElement.style.display = 'inline-block';
};

var ShowBundles = function() {
    console.log("Show Bundles");
    HideAll();
    var elms = document.querySelectorAll("[id*='Bundles_']");
    for (var i = 0; i < elms.length; i++)
        elms[i].parentElement.style.display = 'inline-block';
};

var HideAll = function() {
    elms = document.querySelectorAll("[class='item']");
    for (var i = 0; i < elms.length; i++) {
        elms[i].style.display = 'none';
    }
}
var ClearShopCart = function() {
    location.reload();
};
var myFunction = function(event) {
    var skinname = event.srcElement.id;
    if (event.srcElement.id.includes("Skins_"))
    {
        console.log("Добавили скинчик");
      skinname = event.srcElement.id + "*" + window.prompt("Введите название образа","");
    }
    shopcart.push(skinname);
    totalprice = totalprice + parseInt(event.srcElement.value);
    if (event.srcElement.innerHTML.includes("р"))
    {
        event.srcElement.innerHTML = "0";
    }
    event.srcElement.innerHTML = (parseInt(event.srcElement.innerHTML)+1).toString();
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
