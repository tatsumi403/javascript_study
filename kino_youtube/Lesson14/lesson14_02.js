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
let data_k = [70, 80, 90, 100, 60];
let avg_k = a001.cal_avg(data_k);
let result_k = a001.judge(avg_k);

console.log(a001.name);
console.log(avg_k);
console.log(result_k);

let a002 = new Student("watanabe");
let data_w = [80, 99, 100, 30, 71];
let avg_w = a002.cal_avg(data_w);
let result_w = a002.judge(avg_w);

console.log(a002.name);
console.log(avg_w);
console.log(result_w);
