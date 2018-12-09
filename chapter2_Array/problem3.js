/*
    이차원 배열을 이용해 월간 온도 자료를 저자하도록 weeklyTemps 객체를 고치시오.
    월간 평균을 지정한 주의 평균, 모든 주의 평균을 출력하는 함수를 만드시오.
*/
// TODO: 문제 풀이 
function weeklyTemps() {
  this.dataStore = [];
  this.add = add;
  this.average = average;
}


function add(temp) {
  this.dataStore, push(temp);
}

function average() {
  var total = 0;
  for (var i = 0; i < this.dataStore.length; ++i) {
      total += this.dataStore[i];
  }

  return total / this.dataStore.length
}

var thisWeek = new weeklyTemps()
