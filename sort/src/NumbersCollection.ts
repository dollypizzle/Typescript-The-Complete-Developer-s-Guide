import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(letfIndex: number, rightIndex: number): boolean {
    return this.data[letfIndex] > this.data[rightIndex];
  }

  swap(letfIndex: number, rightIndex: number): void {
    const leftHand = this.data[letfIndex];
    this.data[letfIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
