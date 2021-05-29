'use strict';

let num = 266219;
let str = num.toString().split('');
let arr = str.map(Number);
console.log('Число записанное в массив: '+arr);

let rezult = 1;
for (let i = 0; i < arr.length; i++){
    rezult = rezult * arr[i];
}
console.log('Результат перемножения цифер числа: ' + rezult);

let stepen =3;
let otvet =1;
for(let i = 1; i<=stepen;i++){
    otvet = otvet * rezult;
}
console.log('Возведение числа в 3ю степень: ' + otvet);

let chislo =  otvet.toString().split('');
let array = chislo.map(Number);
console.log('Первая цифра полученного числа: ' + array[0]);
console.log('Вторая цифра полученного числа: ' + array[1]);