import { NAME } from "./test";

interface Person {
  name: string;
  greet: () => void;
}

class Human implements Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(this.name);
  }
}

const joe = new Human(NAME);

joe.greet();
