# my-js-DataStructure

이 저장소는 "Data Structures & Algorithms with JavaScript" 책을 복습하면서 작성하는 내용으로 구성되어 있습니다.

본 책의 문법은 ES5를 쓰고 있으나, 예제의 의도를 해치지 않는 선에서 ES6로 작성하겠습니다.
 - 변수 선언시, var 대신 const, let 사용
 - backtick을 이용한 템플릿 리터럴

## 2 Array 배열
프로그래밍에서 가장 자주 사용하는 자료구조일지도 모르겠다. 모든 언어가 배열을 지원한다고 한다. 자바스크립트에서 배열은 내장 기능이고, 어떻게 동작하며 언제 배열을 사용하는 것이 좋은 지에 대해서 알아본다.

### 2.1 자바스크립트 배열 정의
정수 인덱스(오프셋)을 이용해 각 요소에 접근할 수 있게 순차적으로 요소를 저장한 집합체

### 2.2 배열 사용하기
#### 2.2.1 배열 만들기
- [] 사용
```javascript
// 길이가 0인 배열이 만들어진다.
let numbers1 = []; 

let numbers2 = [1,2,3,4,5];
```
- Array 생성자 호출
```javascript
let numbers3 = new Array();

// 생성자의 인자에 요소 집합을 제공한다. 
let numbers4 = new Array(1,2,3,4,5); 

// 생성자에 배열 길이를 지정하는 한 개의 인자를 제공한다.
let numbers5 = new Array(10); 
```
- 다른 언어와는 다르게, js에서는 한 배열이 다양한 종류의 요소를 포함할 수 있다. 예시를 살펴보자.
```javascript
let objects = [1, "Joe", true, null]
```
- Array.isArray() 함수를 이용하면 특정 객체가 배열인지 아닌지 확인할 수 있다. **(+typeof 연산자로 배열을 확인해보면 'object'라고 알려주므로 주의할 것.)**
```javascript
const numbers = 3;
const arr = [1,2,3];

console.log(Array.isArray(numbers)) //false
console.log(Array.isArray(arr)) //true
```

#### 2.2.2 배열 요소 접근하고 값 고치기
- 생성한 배열에 []를 이용해 배열 요소에 값을 넣을 수 있다. 예를 들면, 다음 코드는 1부터 100까지의 숫자를 배열에 할당한다.
```javascript
let nums = [];
for(let i = 0; i < 100; ++i)
    nums[i] = i+1;
```
- for문에서 length 프로퍼티를 이용하면 현재 배열의 실제 요소 수가 정확하게 반환되므로 언제나 모든 배열의 모든 요소에 접근할 수 있다.
```javascript
const numbers = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
for (let i = 0; i < numbers.length; ++i )
    sum += numbers[i]

console.log(sum) // 55 출력
```

#### 2.2.3 문자열로 배열 만들기
문자열에 split() 함수를 호출하면 배열이 생성된다. split()함수는 문자열을 특정 구분자(예를 들면 단어를 구분하는 공백)로 분리한 다음, 분리된 문자열을 포함하는 배열을 만든다.
```javascript
// how split() works
const sentence = "the quick brown fox jumped over the lazy dog";

// 여기에서, 구분자는 공백이다.
const words = sentence.split(" ") 
for(var i = 0; i < words.length; ++i)
    console.log(`word ${i}: ${words[i]}`)

/* 
    출력 결과
    word 0: the
    word 1: quick
    word 2: brown
    word 3: fox
    word 4: jumped
    word 5: over
    word 6: the
    word 7: lazy
    word 8: dog
*/

```
#### 2.2.4 배열 전체에 적용되는 기능
- 다음과 같이 배열을 다른 배열에 할당할 수 있다.
```javascript
let nums = [];
for(let i = 0; i < 10;++i)
    nums[i] = i+1;
const samenums = nums;
```
- **얕은 복사(Shallow Copy) : 새로 할당된 배열은 단순하게 원래 배열의 요소를 가리키는 것.** 
    
    여기서, 주의할 점은 배열을 다른 배열로 할당할 때 할당된 배열의 레퍼런스를 할당한다는 것이다. 그래서 원래 배열 요소의 값을 바꾸면 할당된 배열도 바뀌게 된다.
```javascript
let nums = [];
for(let i = 0; i < 10;++i)
    nums[i] = i+1;
const samenums = nums;
//여기까지는 위의 예제와 같다.

// samenums에 할당한 배열의 첫번째 요소의 값을 바꾸었다.
nums[0] = 100;
// samenums의 첫번째 요소 값을 확인해보면, 역시 100으로 변했다.
console.log(samenums[0]) // 100
```
- **깊은 복사(Deep Copy) : 원래 배열 요소를 새로운 배열 요소로 복사하는 것.**

    배열의 slice()는 해당 배열의 요소가 포함된 새로운 배열을 반환한다.

```javascript
let nums = [];
for(let i = 0; i < 10;++i)
    nums[i] = i+1;

let samenums = nums.slice();

nums[0] = 100;
console.log(samenums[0]) // 값의 변화는 일어나지 않고 그대로 이다.
```
### 2.3 접근자 함수(Accessor Function)
js는 배열 요소에 접근할 수 있는 다양한 함수를 제공한다. 이들을 접근자 함수이라 부르며 특정값을 포함하는 결과를 배열로 반환한다.

#### 2.3.1 값 검색하기 
- indexOf()
- lastIndexOf()
#### 2.3.2 배열을 문자열로 표현하기 
- join()
- toString()
#### 2.3.3 기존 배열을 이용해 새 배열 만들기
- concat()
- splice()

### 2.4 변형자 함수(Mutator Function) 
#### 2.4.1 배열에 요소 추가하기
- push()
- unshift()
#### 2.4.2 배열의 요소 삭제하기
- pop()
- shift()
#### 2.4.3 배열의 중간에 요소를 추가하거나 배열의 중간에 있는 요소 삭제하기
- splice()
#### 2.4.4 배열 요소 정렬하기
- reverse()
- sort()

### 2.5 반복자 함수
#### 2.5.1 배열을 만들지 않는 반복자 함수
- forEach()
- every()
- some()
#### 2.5.2 새 배열을 반환하는 반복자 함수
- map()
- filter()
#### 2.5.3 
#### 2.5.4 





