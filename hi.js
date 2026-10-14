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
function now(a,n){
   let number = a ** n
   alert(number)
}
let s = prompt('Введите число возводимое в степень');
let n = prompt('Введите степень в которую возводится число');
now(s,n);