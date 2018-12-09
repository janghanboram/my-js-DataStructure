/*
    배열의 단어 집합을 저장한 다음 배열의 내용을 정방향 또는 역방향으로 출력하는 기능을 구현하시오.
*/

let words = ["폴킴", "크로와상", "Vue.js", "React.js", "Node.js", "UX"];

function print(isReversed) {
  if (isReversed) 
    words.reverse();

  console.log(words.join(" "));
}

print(false); //정방향
print(true); //역방향
