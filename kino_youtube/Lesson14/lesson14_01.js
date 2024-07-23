class Student {
  constructor(name) {
    this.name = name;
  }

  cal_avg(data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i];
    }
    let avg = sum / data.length;
    return avg;
  }

  judge(avg) {
    let result;
    if (avg >= 70) {
      result = "合格！";
    } else {
      result = "不合格！";
    }
    return result;
  }
}

let a001 = new Student("kuroda");
let data = [70, 80, 90, 100, 60];
let avg = a001.cal_avg(data);
let result = a001.judge(avg);

console.log(data.length);
console.log(a001.name);
console.log(avg);
console.log(result);
