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

### 2.6 이차원 배열과 다차원 배열
js는 기본적으로 일차원 배열만 지원하지만, 배열의 배열을 이용하면 다차원 배열을 만들 수 있다.
#### 2.6.1 이차원 배열 만들기
#### 2.6.2 이차원 배열 요소 처리하기
#### 2.6.3 들쭉날쭉한 배열

### 2.7 객체를 요소로 포함하는 배열
지금까지는 숫자, 문자열 등 기본 데이터형을 요소로 포함하는 배열만 살펴봤다. 배열은 객체도 요소로 포함할 수 있으며, 지금까지 살펴본 함수와 프로퍼티도 예외없이 잘 작동한다.
### 2.8 객체에 포함된 배열
- 객체에 복잡한 데이터를 저장할 때 배열을 사용하면 좋다. (이 책에서 소개하는 많은 자료구조는 클래스로 구현되었으며 클래스에 데이터를 저장할 때 내부적으로는 배열을 사용한다.)
- 이 예제는 책 전체에서 사용할 여러 기법을 간략하게 보여준다. 
```javascript
function weeklyTemps() {
  this.dataStore = []; 
  this.add = add;
  this.average = average
}

/*
    * add()함수는 push()메소드를 이용해서 dataStore 배열에 데이터를 추가했다.
    * tip : 객체 함수를 정의할 때 직관적으로 이해하기 쉬운 이름을 사용하는 것이 좋다.
*/
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

thisWeek.add(50)
thisWeek.add(50)
thisWeek.add(40)
thisWeek.add(60)
thisWeek.add(30)
thisWeek.add(70)

console.log(thisWeek.average()) // 50 출력
```

## 10 이진 트리(Binary Tree)와 이진 검색 트리(BST)
트리 구조는 계층적인 데이터를 저장할 때 사용된다. 가장 쉬운 예로, 파일 시스템을 떠올리면 되겠다. 특히, 이진 트리라는 특별한 종류의 트리 구조를 살펴본다.
### 10.1 트리의 정의
- 트리란? 에지(Edge)로 연결된 노드(Node)의 집합
- 예시 : 조직도 - 각각의 상자가 노드, 상자를 연결하는 선이 에지
- (나는 이렇게 이해했다. => 노드는 어떤 상태를 나타내는 값을 가지며, 에지는 그 상태들 사이의 관계를 나타낸다)
- 트리 용어 설명
    - 루트(Root) : 트리의 최상위 노드
    - 부모(Parent)-자식(Child) : 상대적인 개념. 한 노드가 아래 노드와 연결되어 있을 때 위에 있는 노드는 부모 노드, 부모 노드 아래 있는 모든 노드를 자식 노드라고 한다.
    - 리프(Leaf) : 자식 노드가 없는 노드.
    - 한 노드는 0개 이상의 노드와 연결될 수 있다.
### 10.2 이진 트리와 이진 검색 트리
- 이진 트리의 정의
    - 모든 노드의 자식 수가 2개 이하인 특수한 노드. 자식 수를 제한한 덕분에 트리의 데이터 삽입, 검색, 삭제를 매우 효율적으로 할 수 있다.
    - 용어 설명 (트리에서도 사용된다)
        - 경로(Path) : 한 노드에서 다른 노드로 도달하는데 사용한 에지의 모음.
        - 트리 탐색(Tree Traversal) : 트리의 모든 노드를 일정한 순서로 방문하는 것.
        - 레벨(Level) : 트리의 구분 기준.
        - 깊이(Depth) : 트리에 있는 레벨의 수.     
        - 서브 트리 : 상대적인 개념. 각 레벨의 노드는 하위 레벨을 구성하는 모든 노드를 포함하는 서브트리의 루트가 된다. 
        - 트리의 각 노드는 값을 가지는데, 그 값을 키값이라고 표현한다.
        - 부모 노드의 자식 노드를 왼쪽(Left) 노드와 오른쪽(Right)노드로 표현한다.
- 이진 검색 트리(Binary Search Tree)
    - **자식 노드의 순서가 중요한 의미를 가진다. => 작은 값은 왼쪽, 큰 값을 오른쪽 노드에 각각 저장한다.**
    - 이러한 특성은 데이터를 효율적으로 검색할 수 있도록 한다. 단어와 문자열도 저장할 수 있다.
#### 10.2.1 이진 검색 트리 구현하기
#### 10.2.2 이진 검색 트리 탐색
- 탐색 방법
    - 중위(inorder) : 노드의 오름차순 키 값으로 BST 클래스의 모든 노드를 방문한다.
    - 전위(preorder) : 먼저 루트 노드를 방문한 다음, 루트의 왼쪽 자식을 중심으로 하는 서브트리 같은 방식으로 방문한다. 마지막으로, 루트 노드의 오른쪽 자식을 중심으로 하는 서브트리를 방문한다.
        - (root 노드) => (root.left)의 서브 트리 => (root.right)의 서브 트리
    - 후위(postorder) : 먼저 루트 노드의 왼쪽 자식을 중심으로 하는 서브트리를 먼저 방문한 다음, 루트 노드의 오른쪽 자식을 중심으로 하는 서브트리를 방문한다. 마지막으로 루트 노드를 방문한다. 
        - (root.left)의 서브 트리 => (root.right)의 서브트리 => (root 노드)
- 중위 탐색
    - 구현 방법
        - 재귀를 사용하면 깔끔하다.
        - 각 노드를 오름차순으로 방문해야 한다 => 오름차순은 작은 것부터 큰 것 순으로 정렬해야 한다. 따라서, 루트 노드의 왼쪽 자식을 중심으로 하는 서브트리에서 모든 서브트리의 왼쪽 노드와 오른쪽 노드를 먼저 방문한 후, 루트 노드의 오른쪽 자식을 중심으로 하는 서브트리를 방문한다.
    - 어떤 상황에서 사용하는가?


### 10.3 BST 검색
#### 10.3.1 최솟값과 최댓값 검색
#### 10.3.2 특정값 검색
### 10.4 BST의 노드 삭제하기
### 10.5 발견 횟수 계산
### 10.6 연습 문제
    1. BST의 노드 갯수를 계산하는 함수를 BST 클래스에 추가하시오. 
    2. BST의 에지 갯수를 계산하는 함수를 BST 클래스에 추가하시오.
    3. BST에서 최댓값을 검색하는 max() 함수를 함수를 BST 클래스에 추가하시오.
    4. BST에서 최솟값을 검색하는 min() 함수를 함수를 BST 클래스에 추가하시오.
    5. 큰 텍스트 파일에 저장된 단어를 BST로 저장한 다음 각 단어가 등장하는 횟수를 출력하는 프로구램을 구현하시오.





