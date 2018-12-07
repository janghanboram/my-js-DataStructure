# my-js-DataStructure

이 저장소는 "Data Structures & Algorithms with JavaScript" 책을 복습하면서 작성하는 내용으로 구성되어 있습니다.

## 2 Array 배열
프로그래밍에서 가장 자주 사용하는 자료구조일지도 모르겠다. 모든 언어가 배열을 지원한다고 한다. 자바스크립트에서 배열은 내장 기능이고, 어떻게 동작하며 언제 배열을 사용하는 것이 좋은 지에 대해서 알아본다.

### 2.1 자바스크립트 배열 정의
정수 인덱스(오프셋)을 이용해 각 요소에 접근할 수 있게 순차적으로 요소를 저장한 집합체

### 2.2 배열 사용하기
#### 2.2.1 배열 만들기
- [] 사용
```javascript
// 길이가 0인 배열이 만들어진다.
var numbers1 = []; 

var numbers2 = [1,2,3,4,5];
```
- Array 생성자 호출
```javascript
var numbers3 = new Array();

// 생성자의 인자에 요소 집합을 제공한다. 
var numbers4 = new Array(1,2,3,4,5); 

// 생성자에 배열 길이를 지정하는 한 개의 인자를 제공한다.
var numbers5 = new Array(10); 
```
- 다른 언어와는 다르게, js에서는 한 배열이 다양한 종류의 요소를 포함할 수 있다. 예시를 살펴보자.
```javascript
var objects = [1, "Joe", true, null]
```
- Array.isArray() 함수를 이용하면 특정 객체가 배열인지 아닌지 확인할 수 있다. **(+typeof 연산자로 배열을 확인해보면 'object'라고 알려주므로 주의할 것.)**
```javascript
var numbers = 3; // false
var arr = [1,2,3]; // true
```

#### 2.2.2 배열 요소 접근하고 값 고치기
- 생성한 배열에 []를 이용해 배열 요소에 값을 넣을 수 있다. 예를 들면, 다음 코드는 1부터 100까지의 숫자를 배열에 할당한다.
```javascript
var nums = [];
for(var i = 0; i < 100; ++i)
    nums[i] = i+1;
```
- for문에서 length 프로퍼티를 이용하면 현재 배열의 실제 요소 수가 정확하게 반환되므로 언제나 모든 배열의 모든 요소에 접근할 수 있다.
```javascript
var numbers = [1,2,3,4,5,6,7,8,9,10];
var sum = 0;
for (var i = 0; i < numbers.length; ++i )
    sum += numbers[i]

console.log(sum) // 55 출력
```

#### 2.2.3 문자열로 배열 만들기
```javascript
var sentence = "the quick brown fox jumped over the lazy dog";
```
#### 2.2.4 배열 전체에 적용되는 기능

### 2.3 접근자 함수





