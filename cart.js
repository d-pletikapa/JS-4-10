'use strict';
console.log('Задание 1:')

// Задание 1
// Продолжим работу с cart.js
//
// Обнаружена уязвимость в нашем функционале
//
// Если после добавления последнего товара присвоить к totalPrice любое значение,
//
// 	например
//
// cart.totalPrice = 10;
//
// то при выводе print() общая стоимость корзины будет равна 10
//
//
//
// Чтобы это предотвратить, необходимо свойство totalPrice сделать геттером который будет возвращать результат вызова метода calculateItemPrice
//
//
//
// метод getTotalPrice больше не нужен
//
//
//
// calculateItemPrice переделать таким образом, чтобы сумму он возвращал, а не записывал в свойство totalPrice
//
//
//
// Вызов метода calculateItemPrice оставить только у геттера totalPrice
//
//
//
//
//


const cart = {
	items: [],
	count: 0,
	// totalPrice: 0,
	// getTotalPrice() {
	// 	console.log('cart.totalPrice = ', cart.totalPrice);
	// 	return cart.totalPrice;
	// },

	get totalPrice () {
		return this.calculateItemPrice();

	},

	calculateItemPrice() {
		let totalPrice = 0;
		this.items.forEach(item => {
			const itemPrice = item.productPrice * item.productCount;
			totalPrice += itemPrice;
			// console.log(totalPrice);
		})
		return totalPrice;
	},

	add(productName, productPrice, productCount = 1) {

		const newItem = { productName, productPrice, productCount };
		this.items.push(newItem);
		this.increaseCount(productCount);
		cart.totalPrice;
	},

	increaseCount(counter) {
		return this.count += counter;
	},
	print() {
		const resultItems = JSON.stringify(cart.items);
		const resultPrice = JSON.stringify(cart.totalPrice);
		console.log(`result: ${resultItems}\ntotalPrice: ${resultPrice}`);
	},
	clear() {

		// this.items = [];
		// this.items.splice(0, cart.items.length);
		this.items.length = 0;
		this.count = 0;
		// this.totalPrice = 0;
	},
};

// Performing tests for metheds of cart object:

cart.add('Banana', 100, 2);
cart.add('Apple1', 50, 1);
cart.add('Apple2', 60, 1);
cart.add('Orange', 200, 3);
console.log("🚀 ~ file: cart.js ~ line 60 ~ add ~ items", cart.items);
cart.totalPrice;
cart.print();
cart.clear();





