/*
  Задача:
  Добавить функции метод reverse, который будет переворачивать строку на оборот
  Примеры:
  'test'.reverse() === 'tset';
  'bob'.reverse() === 'bob';
  'abc123'.reverse() === '321cba';
 */

function stringReverse(str) {
    if (!str) {
        str = this;
    }
    let arrStrReverse = [];
    for (let i = 0; i < str.length; i++) {
        let letter = str[i]
        arrStrReverse.push(letter);
    }
    arrStrReverse.reverse()
    let strReverse = arrStrReverse.join('')
    return strReverse
}

String.prototype.reverse = stringReverse;