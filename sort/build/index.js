"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, -30, -5, 1, 0]);
numbersCollection.sort();
console.log(numbersCollection);
var charactersCollection = new CharactersCollection_1.CharactersCollection("Xaaybddd");
charactersCollection.sort();
console.log(charactersCollection);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
console.log(linkedList);
//-------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------
// class Sorter {
//   constructor(public collection: number[] | string) {}
//   sort(): void {
//     const { length } = this.collection;
//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length - i - 1; j++) {
//         // All of this only works if collection is number[]
//         // If collection is an array of numbers
//         if (this.collection instanceof Array) {
//           // collection === number[]
//           if (this.collection[j] > this.collection[j + 1]) {
//             const leftHand = this.collection[j];
//             this.collection[j] = this.collection[j + 1];
//             this.collection[j + 1] = leftHand;
//           }
//         }
//         // Only going to work if collection is a string
//         // If collection is a string do this logic instead:
//         // ~~~ logic to compare and swap characters in astring
//         if (typeof this.collection === "string") {
//         }
//       }
//     }
//   }
// }
// const sorter = new Sorter([10, -3, -5, 1, 0]);
// sorter.sort();
// console.log(sorter.collection);
// class Sorter {
//   constructor(public collection: number[]) {}
//   sort(): void {
//     const { length } = this.collection;
//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length - i - 1; j++) {
//         if (this.collection[j] > this.collection[j + 1]) {
//           const leftHand = this.collection[j];
//           this.collection[j] = this.collection[j + 1];
//           this.collection[j + 1] = leftHand;
//         }
//       }
//     }
//   }
// }
// const sorter = new Sorter([10, -3, -5, 1, 0]);
// sorter.sort();
// console.log(sorter.collection);
