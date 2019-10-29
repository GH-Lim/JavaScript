console.log(add)

// 함수 선언식
function add(num1, num2) {
  return num1 + num2
}

add(1, 2)

// 함수 표현식
const sub = function(num1, num2) {
  return num1 - num2
}

// Arrow function
// ES6+
const addOne = function(num) {
  return num + 1
}

const addTwo = (num) => {
  return num + 2
} // 이걸로 많이쓸 예정
// 기능적인 차이가 있다.

// 중괄호 제거
const addThree = (num) => num + 3

const addFour = num => num + 4

function hello(name) {
  return `hello ${name}`
}

const hello2 = function(name) {
  return `hello ${name}`
}

const hello3 = name => `hello ${name}`

// object 를 반환하는 arrow function

const makeObject1 = value => {
  return {'key': value}
}

const makeObject2 = value => ({'key': value})

const noArgs = () => 'no Args'
