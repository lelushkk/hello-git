let UserLogin = prompt('Введите логин')
if (UserLogin == 'Админ'){
    let password = prompt('Введите пароль')
    if(password == 'Я главный'){
        alert('Здравствувйте')
    } else if ( password == "" || password == null) {
        alert('Отменено')
    } else {
        alert('Неверный пароль')
    }
} else if (UserLogin == "" || UserLogin == null) {
    alert('Отменено')
} else {
    alert('Я вас не знаю')
}
