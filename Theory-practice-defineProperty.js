'use strict';
console.log('Тренировка defineProperty:');

const car = {
    car : 'mini',
    model: 'cooper',
    price: 30000,

    get comment () { // Геттер
        return ` ${this.trueComment}`
    },
    set comment (val) { // Сеттер
        if (typeof val === 'string') {
            this.trueComment = val;
        }
    },
    trueComment: 'not',
};

console.log("-> car.trueComment", car.trueComment);
car.trueComment = 'Тачка огонь! 2';
console.log("-> car.trueComment", car.trueComment);

Object.defineProperty(car, 'model',{
    configurable: false, // запрет на удаление
    enumerable: false, // запрет на итерацию (ключи, свойства не будут видеть этот параметр, сам ключ станет серым в консоли.
    writable:false, // нельзя перезаписать свойство.
    }
);


Object.defineProperty(car, 'fullName',{ // теперь можно записывать напрямую в объекты:

        get() { // Геттер
            return `${this.car} ${this.model}`
        },
        set(val) { // Сеттер
            if (typeof val === 'string') {
                this.car = val;
            }

        }
    }
);


console.log("-> чтение геттера", car.fullName); // чтение геттера
car.fullName = 'Тачка огонь! 1';
car.fullName = 123;
console.log("-> car.fullName", car.fullName);


// car.model = 'electric';
// delete car.model;
// console.log(Object.keys(car));
// console.log(Object.values(car));
// console.log(Object.entries(car));

console.log(car);
