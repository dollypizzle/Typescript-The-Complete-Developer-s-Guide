import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(letfIndex: number, rightIndex: number): boolean {
    return (
      this.data[letfIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(letfIndex: number, rightIndex: number): void {
    const characters = this.data.split("");

    const leftHand = characters[letfIndex];
    characters[letfIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;

    this.data = characters.join("");
  }
}
