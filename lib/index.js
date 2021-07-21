"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = 'Hello World';
message += ' again';
console.log(message);
// Array
var array = [1, 2, 3];
console.log(array);
// Tuple
var tuple = [0, 0];
tuple = [1, 1];
console.log(tuple);
//object
var center = {
    x: 0,
    y: 0,
};
var unit = {
    x: 0,
    y: 9,
};
//functions
function add(a, b) {
    return a + b;
}
function log(message) {
    console.log('LOG: ', message);
}
var user = { id: 'user-erewr' };
var product = { id: 'product-reewr3' };
// classes
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
// Queue -> Generic type implementation
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (item) {
        this.data.push(item);
    };
    Queue.prototype.pop = function () {
        return this.data.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.push(123);
queue.push('string');
console.log(queue.pop().toPrecision(1));
console.log(queue.pop().toPrecision(1));
