interface Sortable {
  length: number;
  compare(letfIndex: number, rightIndex: number): boolean;
  swap(letfIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
  abstract compare(letfIndex: number, rightIndex: number): boolean;
  abstract swap(letfIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
