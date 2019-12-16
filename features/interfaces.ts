interface Reportable {
  // name: string;
  // year: Date;
  // broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `${this.name}`;
  }
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

const printSummary = (item: Reportable): void => {
  // console.log(`Name: ${item.name}`);
  // console.log(`Year: ${item.year}`);
  // console.log(`Broken? ${item.broken}`);
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
