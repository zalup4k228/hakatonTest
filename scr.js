document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('form').addEventListener('submit', function(e) {
        e.preventDefault(); // Предотвращаем отправку формы по умолчанию

        // Получаем значения из полей
        var agreement = document.getElementById('agreement').value;
        var password = document.getElementById('password').value;

        // Объединяем значения в переменную data
        var data = agreement + ' ' + password;

        // Отправляем данные через функцию sendData (замените на вашу функцию)
        sendData(data);
      });
    });

    function sendData(data) {
      // Здесь вы можете реализовать отправку данных на сервер или выполнить другие действия с переменной data
      // Просто для примера, выведем значение в консоль
      console.log(data);
    }
