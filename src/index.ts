let message: string = 'Hello World';
message += ' again';
console.log(message);

// Array
let array: number[] = [1, 2, 3];
console.log(array);

// Tuple
let tuple: [number, number] = [0, 0];
tuple = [1, 1];
console.log(tuple);

//type alias
type Point = { x: number; y: number };

//object
let center: Point = {
  x: 0,
  y: 0,
};

let unit: Point = {
  x: 0,
  y: 9,
};

//functions
function add(a: number, b: number): number {
  return a + b;
}

function log(message: string): void {
  console.log('LOG: ', message);
}

type User = { id: string };
type Product = { id: string };

let user: User = { id: 'user-erewr' };
let product: Product = { id: 'product-reewr3' };
