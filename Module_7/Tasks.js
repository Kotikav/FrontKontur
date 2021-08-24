//Task_1
function convertCelsiusToFahrenheit(degrees) {
  let f = (degrees*9/5) + 32;
  return f;
  console.log('В градусах Фаренгейта: ' + f);
}

convertCelsiusToFahrenheit(36);
/////////////////////////////////////////////////////////////////////////


//Task_2
function convertStringToNumber(str) {
  let res = Number(str);
  if (typeof res === 'number' && !(res !== res)) {
    return res;
  } else {
    return 'failed';
  }
}

convertStringToNumber('123');
/////////////////////////////////////////////////////////////////////////


//Task_3
function getNaN () {
    return -'abc';
}

getNaN();
/////////////////////////////////////////////////////////////////////////


//Task_4
function createGratitude(name, rating) {
  if (typeof name !== 'string') {
    name = 'Аноним';
  }
  if (rating < 1 || rating > 5) {
    rating = 0;
  }
  return(name + ' оценил нас на ' + rating + ' из 5. Спасибо, ' + name + '!');
}

createGratitude('Maximka', 5);
/////////////////////////////////////////////////////////////////////////


//Task_5
function checkA1 (a) {
  if (a == '0') {
    return 'Всё плохо.';
  } else {
    return a;
  }
}

checkA1(0);


function checkA2 (a) {
  return (a == '0') ? 'Всё плохо.' : a;
}

checkA2(0);


function checkA3 (a) {
  let res = a || 'Всё плохо.';
  return res;
}

checkA3(0);


//Task_6
function squaresSum(min, max) {
  let square;
  let res = 0;
  while (min != (max + 1)) {
    square = min*min;
    res = res + square;
    min++;
  }
  return res;
}

squaresSum(1, 3);
