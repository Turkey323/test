let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';
async function start() {
	
olditemslist = document.getElementsByClassName("inner")[0];
response = await fetch("1.json");
item = await response.json();
temptext = "";
for (let index = 0; index < item.length; index++) {
    console.log(item[index].itemname);
	temptext += '<div class="item"><img src="' + item[index].id + '.png" alt="" class="img"> <p><center>' + item[index].itemname + '</center></p><button class="btn" id="'+item[index].id + '">Добавить</button></div>'
}
olditemslist.innerHTML = temptext;
}
let item = "";
var elements = document.getElementsByClassName("btn");

var myFunction = function(event) {
     console.log(event.srcElement.id);
	tg.sendData(event.srcElement.id);
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}



Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});



(async() => {
  console.log('before start');

  await start();
  
  console.log('after start');
})();




