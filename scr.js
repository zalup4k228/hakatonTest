let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

let btn = document.getElementById("btn");
var pass = document.getElementById("pass").value;
var ang = document.getElementById("ang").value;
var data = pass + ang;


btn.addEventListener("click", function(){
    tg.MainButton.setText("Сообщение отправлено!");
    tg.MainButton.show();
    tg.sendData(data);
});
