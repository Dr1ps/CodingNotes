// arrays-cheatsheet.ts

// ======================================================
// CREATION
// ======================================================

const numbers = [1, 2, 3];
const strings = ["a", "b", "c"];
const mixed = [1, "hello", true];

const empty: number[] = [];
const typed: Array<number> = [1, 2, 3];

const filled = Array(5).fill(0);
const fromRange = Array.from({ length: 5 }, (_, i) => i);

// ======================================================
// ACCESS
// ======================================================

numbers[0];
numbers.at(-1); // last element

numbers.length;

// ======================================================
// ADD / REMOVE (mutates)
// ======================================================

numbers.push(4); // end
numbers.pop(); // remove end

numbers.unshift(0); // beginning
numbers.shift(); // remove beginning

numbers.splice(1, 2); // remove
numbers.splice(1, 0, 99); // insert
numbers.splice(1, 1, 50); // replace

// ======================================================
// COPY
// ======================================================

const copy1 = [...numbers];
const copy2 = numbers.slice();
const copy3 = Array.from(numbers);

// ======================================================
// MERGE
// ======================================================

const merged1 = [...numbers, ...filled];
const merged2 = numbers.concat(filled);

// ======================================================
// EXTRACT
// ======================================================

numbers.slice(1);
numbers.slice(1, 3);
numbers.slice(-2);

// ======================================================
// SEARCH
// ======================================================

numbers.includes(2);
numbers.indexOf(2);
numbers.lastIndexOf(2);

numbers.find(n => n > 2);
numbers.findIndex(n => n > 2);

numbers.some(n => n > 2);
numbers.every(n => n > 0);

// ======================================================
// ITERATION
// ======================================================

numbers.forEach(n => console.log(n));

for (const n of numbers) {
    console.log(n);
}

for (const index in numbers) {
    console.log(index);
}

numbers.entries();
numbers.keys();
numbers.values();

// ======================================================
// TRANSFORM
// ======================================================

const doubled = numbers.map(n => n * 2);

const evens = numbers.filter(n => n % 2 === 0);

const sum = numbers.reduce((acc, n) => acc + n, 0);

const product = numbers.reduce((acc, n) => acc * n, 1);

const flat = [[1], [2], [3]].flat();

const flatMapped = numbers.flatMap(n => [n, n * 2]);

// ======================================================
// SORTING
// ======================================================

numbers.sort((a, b) => a - b);

numbers.reverse();

const sortedCopy = [...numbers].sort((a, b) => a - b);

const reversedCopy = [...numbers].reverse();

const immutableSorted = numbers.toSorted((a, b) => a - b);

const immutableReversed = numbers.toReversed();

// ======================================================
// JOIN / STRING
// ======================================================

strings.join(", ");
strings.join("");
numbers.toString();

// ======================================================
// FILL / COPY WITHIN
// ======================================================

numbers.fill(0);

numbers.fill(5, 1, 3);

numbers.copyWithin(0, 2);

// ======================================================
// DESTRUCTURING
// ======================================================

const [first, second] = numbers;

const [head, ...tail] = numbers;

// ======================================================
// INSERT (immutable)
// ======================================================

const insertAt = (arr: number[], index: number, value: number) => [
    ...arr.slice(0, index),
    value,
    ...arr.slice(index),
];

// ======================================================
// REMOVE (immutable)
// ======================================================

const removeAt = (arr: number[], index: number) => [
    ...arr.slice(0, index),
    ...arr.slice(index + 1),
];

// ======================================================
// REPLACE (immutable)
// ======================================================

const replaceAt = (arr: number[], index: number, value: number) => [
    ...arr.slice(0, index),
    value,
    ...arr.slice(index + 1),
];

// ======================================================
// UNIQUE
// ======================================================

const unique = [...new Set([1, 2, 2, 3])];

// ======================================================
// CONVERT
// ======================================================

const chars = Array.from("hello");

const set = new Set(numbers);
const backToArray = [...set];

// ======================================================
// CHECK
// ======================================================

Array.isArray(numbers);

// ======================================================
// COMMON PATTERNS
// ======================================================

// First
numbers[0];

// Last
numbers.at(-1);

// Random
numbers[Math.floor(Math.random() * numbers.length)];

// Max / Min
Math.max(...numbers);
Math.min(...numbers);

// Sum
numbers.reduce((a, b) => a + b, 0);

// Average
numbers.reduce((a, b) => a + b, 0) / numbers.length;

// Count occurrences
const count = numbers.reduce((acc, n) => {
    acc[n] = (acc[n] ?? 0) + 1;
    return acc;
}, {} as Record<number, number>);

// Group by
const grouped = numbers.reduce((acc, n) => {
    const key = n % 2 === 0 ? "even" : "odd";
    (acc[key] ??= []).push(n);
    return acc;
}, {} as Record<string, number[]>);

// ======================================================
// COMMON ARRAY METHODS
// ======================================================

// at()
// concat()
// copyWithin()
// entries()
// every()
// fill()
// filter()
// find()
// findIndex()
// findLast()
// findLastIndex()
// flat()
// flatMap()
// forEach()
// includes()
// indexOf()
// join()
// keys()
// lastIndexOf()
// map()
// pop()
// push()
// reduce()
// reduceRight()
// reverse()
// shift()
// slice()
// some()
// sort()
// splice()
// toReversed()
// toSorted()
// toSpliced()
// toString()
// unshift()
// values()
// with()