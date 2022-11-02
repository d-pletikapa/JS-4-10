'use strict';
console.log('Тренировка map-set-fix:');

const actors = new Map();

const Batman = {
    title: 'Batman',
    universe: 'DC'
}
const Hulk = {
    title: 'Hulk',
    universe: 'Marvel'
}

const DoctorStrange = {
    title: 'DoctorStrange',
    universe: 'Marvel'
}
const SpiderMan = {
    title: 'SpiderMan',
    universe: 'Marvel'
}
const IronMan = {
    title: 'IronMan',
    universe: 'Marvel'
}
const Wolverine = {
    title: 'Wolverine',
    universe: 'Marvel'
}
const Superman = {
    title: 'Superman',
    universe: 'Marvel'
}
const Tor = {
    title: 'Tor',
    universe: 'Marvel'
}
const StarLord = {
    title: 'StarLord',
    universe: 'Marvel'
}

actors.set(Batman, 'Бен Аффлек');
actors.set(Hulk, 'Марк Руффалло');
actors.set(DoctorStrange, 'Бенедикт Камбербэтч');
actors.set(SpiderMan, 'Тоби Магуайр');
actors.set(IronMan, 'Роберт Дауни-мл');
actors.set(Wolverine, 'Хью Джекман');
actors.set(Superman, 'Генри Кавилл');
actors.set(Tor, 'Крис Хемсворт');
actors.set(StarLord, 'Крис Прэтт');

console.log(actors.get(Hulk)); // получить ключ

//for of ,keys, values, entries, forEach
console.log('for of, keys, values, entries, forEach');
console.log(actors.keys());
console.log([...actors.keys()]); // через оператор спреад получили массив
console.log([...actors.values()]);// через оператор спреад получили массив
console.log([...actors.entries()]);// через оператор спреад получили массив

actors.delete(Tor);
console.log(`actors.delete('Tor')`); // удалить ключ

// actors.clear();  // Стереть ключи
console.log('actors.size (количество ключей)', actors.size);
//actors.size

for (const [hero,actor] of actors) { // for of с деструктризацией
    console.log(`${hero} role ${actor}`);
}


console.log('actors:', actors);



const actors2 = new WeakMap();

const Batman2 = {
    title: 'Batman',
    universe: 'DC'
}
const Hulk2 = {
    title: 'Hulk',
    universe: 'Marvel'
}
const DoctorStrange2 = {
    title: 'DoctorStrange',
    universe: 'Marvel'
}
const SpiderMan2 = {
    title: 'SpiderMan',
    universe: 'Marvel'
}
const IronMan2 = {
    title: 'IronMan',
    universe: 'Marvel'
}
const Wolverine2 = {
    title: 'Wolverine',
    universe: 'Marvel'
}
const Superman2 = {
    title: 'Superman',
    universe: 'Marvel'
}
const Tor2 = {
    title: 'Tor',
    universe: 'Marvel'
}
const StarLord2 = {
    title: 'StarLord',
    universe: 'Marvel'
}

actors.set(Batman2, 'Бен Аффлек');
actors.set(Hulk2, 'Марк Руффалло');
actors.set(DoctorStrange2, 'Бенедикт Камбербэтч');
actors.set(SpiderMan2, 'Тоби Магуайр');
actors.set(IronMan2, 'Роберт Дауни-мл');
actors.set(Wolverine2, 'Хью Джекман');
actors.set(Superman2, 'Генри Кавилл');
actors.set(Tor2, 'Крис Хемсворт');
actors.set(StarLord2, 'Крис Прэтт');

console.log('actors2:', actors2);
console.log(actors.get(StarLord2));
console.log(actors.has(StarLord2));


const heroes = new Set();
heroes.add('Hulk');
heroes.add('SpiderMan');
heroes.add('Star-Lord');
heroes.add('Hulk'); // В сетах хранятся только уникальные значения второй раз hulk не добавился.

console.log(heroes.keys());
console.log([...heroes.values()]);// через оператор спреад получили массив

for (const hero of heroes) {
    console.log(hero);
}

heroes.has('SpiderMan');
heroes.delete('SpiderMan');

heroes.clear(); // очистить коллекцию

console.log(heroes.size) ; // нет length


console.log("-> heroes", heroes);

const array = [1,2,3,4,4,5];
const array2 = [...new Set(array)];
console.log(new Set([1,2,3,4,4,5]));
console.log(array2);


const heroes2 = new WeakSet();
// не итерируется, можно добавить два одинаковых объекта (будут разные ссылки)

heroes2.add(Hulk);
heroes2.add(SpiderMan);
heroes2.add(StarLord);
heroes2.add({...Hulk});


console.log("-> heroes2", heroes2);



