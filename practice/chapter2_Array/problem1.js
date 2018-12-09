/*
    객체에 학생들의 점수 집합을 저장하는 grades 객체를 만드시오.
    점수를 추가하는 함수, 학생의 평균 점수를 출력하는 기능을 객체에 추가하시오.
*/

function gradesTemplate() {
  this.dataArray = [];
  this.addData = addData;
  this.printAverage = printAverage;
}

function addData(data) {
  this.dataArray.push(data);
}

function printAverage() {
  let sum = this.dataArray.reduce((sum, item) => {
    return sum + item;
  });

  return sum / this.dataArray.length;
}

let grades = new gradesTemplate();

grades.addData(50);
grades.addData(50);
grades.addData(40);
grades.addData(60);
grades.addData(30);
grades.addData(70);

console.log(grades.printAverage());
