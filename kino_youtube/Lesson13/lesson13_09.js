class Student {
  constructor() {
    this.name = "";
  }
  avg(math, english) {
    console.log((math + english) / 2);
  }
}

let a001 = new Student();
a001.name = "kuroda";
console.log(a001.name);

let a002 = new Student();
a002.name = "watanabe";
console.log(a002.name);
