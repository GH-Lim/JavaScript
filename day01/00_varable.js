// 한줄 주석
/*
  여러줄 주석
*/

// 값을 재할당 할 수 있는 변수를 선언하는 키워드
// 블럭 유효 범위(block scope)를 갖는다.
let x = 1
// print(x) // 자바스크립트의 프린트는 실제 프린트를 하겠다
// console.log(x)
// let x = 3 // 자바스크립트에서 모든 변수는 재선언 불가
x = 3 // 재할당 가능
// console.log(x)

if (x === 3) {
  // console.log(x)
  let message = '안녕하세요'
  console.log(message)
  console.log(x)
}

// console.log(message) // Uncaught ReferenceError

let y
console.log(y)
// let은 할당하지 않아도 undefined로 초기화

// y = 2 // var y = 2 와 동일

// const
// 값이 변하지 않는 (재할당을 할 수 없는) 상수를 선언하는 키워드이다.
// let 과 동일하게 블록 유효 범위(block scope)를 가진다.
// "모든" 선언에서 가능한 상수를 사용해야 한다.
console.log('=const=')
const MY_FAV = 20
// const MY_FAV // 할당하지 않으면 에러발생
if (MY_FAV === 20) {
  const MY_FAV = 30
  console.log(MY_FAV)
}
console.log(MY_FAV)


// 식별자
// 변수명을 식별자라고 불린다.
// 1. 반드시 문자, 달러($), 밑줄(_)로 시작해야한다.
// 2. 대소문자를 구분하고 Class 이름을 제외하고는 대문자로 시작하지 않는걸 권장
// 3. 예약어 사용 불가 (const, let, class, return, case)

// 카멜 케이스 (camelCase) - 객체, 함수, 변수

// 이벤트 핸들러 - 'on' 으로 시작
const onClick = () => {}


// boolean 값 - 'is' 로 시작
let isAvailavle = false

// 함수이름
function getUsername() {}


// 파스칼 케이스 (PascalCase) - 클래스, 생성자 (UpperCamelCase)
class User {}


// 대문자 스네이크 케이스 - 상수
const API_KEY = 'asdasd'

