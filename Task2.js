'use strict';
import { listIPv4 } from '/ipv4.js';
console.log('Задание 2:');

// Задание 2
//
//
// Вам дан список ip-адресов -> IPv4
//
//
//
// задача: написать функцию, которая будет возвращать число равное количеству уникальных ip-адресов
console.log('listIPv4 initial length', listIPv4.length);

const getUniqueNumbersAmount = (arr) => {
        const ipSet = new Set(arr);
        console.log('Set',ipSet.size);


        const newIpArr = arr.filter((item, index) => arr.indexOf(item) === index);
        console.log('Filter', newIpArr.length);
}

getUniqueNumbersAmount(listIPv4);

