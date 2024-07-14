class Student {
  avg(math, english) {
    console.log((math + english) / 2);
  }
}

var a001 = new Student();
a001.name = "kuroda";
a001.avg(80, 70);

console.log(a001.name);
