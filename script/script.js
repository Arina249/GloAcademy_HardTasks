  'use strict';

  /*
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
*/

let array;

let lang = 'ru';

if(lang === 'ru'){
    array = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб','вс'];
    console.log(array);
}else if(lang === 'en'){
    array = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
    console.log(array);
}

switch(lang) {
    case 'ru':
        array = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб','вс'];
        console.log(array);
        break;
    case 'en':
        array = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
        console.log(array);
        break;   
}


array = [];
array['ru'] = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб','вс'];
array['en'] = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
lang = 'ru';
console.log(array[lang]);


let namePerson = 'Артем';
namePerson ===
      ('Артем') ? console.log('директор'):
      namePerson === 
              ('Максим') ? console.log('преподаватель'):
                                 console.log('студент');



