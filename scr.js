function register() {
  // Получить данные из формы
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Создать переменную data
  var data = {
    "username": username,
    "email": email,
    "password": password
  };

  // Отправить данные на сервер
  document.getElementById("data").value = JSON.stringify(data);
  document.forms[0].submit();
    }

    document.getElementById("register").addEventListener("click", register);
