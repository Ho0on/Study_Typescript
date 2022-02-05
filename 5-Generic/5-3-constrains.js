"use strict";
class FullTimeEmployee {
    pay() {
        console.log('full Time!!');
    }
    workFullTime() { }
}
class PartTimeEmplyee {
    pay() {
        console.log('part time!!');
    }
    workPartTime() { }
}
// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 똥이다
function payBad(employee) {
    employee.pay();
    return employee;
}
function pay(employee) {
    employee.pay();
    return employee;
}
const hoon = new FullTimeEmployee();
const bob = new PartTimeEmplyee();
hoon.workFullTime();
bob.workPartTime();
const hoonAfterPay = pay(hoon);
const bobAfterPay = pay(bob);
const obj = {
    name: 'hoon',
    age: 20,
};
const obj2 = {
    animal: '🐒',
};
console.log(getValue(obj, 'name')); //hoon
console.log(getValue(obj, 'age')); //20
console.log(getValue(obj2, 'animal')); //🐒
function getValue(obj, key) {
    return obj[key];
}
