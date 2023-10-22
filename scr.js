let tg = window.Telegram.WebApp;

tg.expand();

btn.addEventListener("click", function(){
    var pass = document.getElementById("pass").value; // Получаем актуальное значение поля пароля
    var ang = document.getElementById("ang").value; // Получаем актуальное значение поля номера договора 
    var combinedData = pass + ' ' + ang;
    
    tg.MainButton.setText("Сообщение отправлено!");
    tg.MainButton.show();
   tg.sendData(combinedData);
});
