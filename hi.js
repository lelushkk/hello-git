/*let UserLogin = prompt('Введите логин')
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
    alert('Я вас не знаю')*/

   const number = +prompt('Введите числол между 0 и 3')
   switch(number){
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может 3');
        break;
    default:
        alert('Вы ввели число не из этого диапозона!')
   }



