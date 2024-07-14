class Student {
  avg(math, english) {
    console.log((math + english) / 2);
  }
}

var a001 = new Student();
a001.name = "kuroda";
a001.avg(80, 70);
console.log(a001.name);

var a002 = new Student();
console.log(a002.name); // プロパティを定義してないのでundefined
