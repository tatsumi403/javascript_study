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

  cal_max(data) {
    let max = 0;
    for (let i = 0; i < data.length; i++) {
      if (max <= data[i]) {
        max = data[i];
      }
      return max;
    }
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
let max = a001.cal_max(data);
let result = a001.judge(avg);

console.log("名前；" + a001.name);
console.log("平均点；" + avg);
console.log("最高得点：" + max);
console.log("結果：" + result);
