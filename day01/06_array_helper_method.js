// Array helper method

const colors = ['red', 'green', 'blue', 'salmon']

for (const color of colors) {
  // console.log(color)
}

// colors.forEach(function(color) {
//   console.log(color)
// }) // forEach 는 array가 갖고있는 method 함수를 인자로 받을 수 있다.

// forEach -> Loop 를 대신 돌아줌
// colors.forEach(color => console.log(color))

// map -> 배열 내의 모든 요소에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열 return
// 일정한 형식의 새로운 배열을 만들 떄 사용한다.

const numbers = [1, 2, 3, 4]

const sqr_numbers = numbers.map(number => number ** 2) // { return number * 2 }

//
const sqrt_numbers = sqr_numbers.map(number => Math.sqrt(number))
// sqr_numbers.forEach(number => console.log(Math.sqrt(number)))
sqr_numbers.map(Math.sqrt)

// map 헬퍼를 사용해서 distance/ time (속도) 를 저장하는 배열 speeds 만들기
const trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 },
]
const speeds = trips.map(trip => trip.distance / trip.time )
// 루프를 돌면서 각 아이템마다 하나씩 적용하는 함수


// filter -> 주어진 함수의 테스트를 통과하는 모든 요소를 모아서 새로운 배열 반환.
numbers.filter(number => {
  return number % 2 === 0
})

const products = [
  { name: 'cucumber', type: 'vege' },
  { name: 'banana', type: 'fruit' },
  { name: 'carrot', type: 'vege' },
  { name: 'apple', type: 'fruit' },
]

const fruits = products.filter(product => product.type === 'fruit')

// filter - 나이가 50 이상인 아이템만 가지고 있는 새로운배열 만들기
const ages = [15, 25, 35, 45, 55, 65, 75, 85, 95]
const obs = ages.filter((age, index, self) => {
  // console.log(age, index, self)
  return age >= 50
})

// find - 주어진 판별 함수를 만족하는 첫번쨰 요소의 값을 반환, 없다면 undefined 를 반환

const users = [
  { name: 'Tony Stark', age: 45 },
  { name: 'Steve Rogers', age: 32 },
  { name: 'Thor', age: 40 },
]
const tony = users.find(user => {
  return user.name === 'Tony Stark'
})
// filter 로 찾으면 array 안에 담아서 반환! 동일한 값을 모두 찾기때문에

// some & every
// some - 배열 안에 요소 하나라도 true 라면 true 모두 false라면 false
const arr = [1, 2, 3, 4, 5, ]
const result = arr.some(num => {
  return num % 2 === 0
})
// every - 배열 안에 요소가 모두 true 라면 true 하나라도 false 라면 false
const result2 = arr.every(num => num % 2 === 0) // 홀수가 있기때문에 false

// requests 배열에서 각 요청들 중 status 가 pending 인 요청이 있는지 확인하라
const requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' },
]

const isInProgress = requests.some(request => request.status === 'pending')

// reduce - 배열의 각 요소에 대해 주어진 `reducer` 함수를 실행하고 하나의 값을 반환한다.
// reduce 는 배열 내의 숫자 총합, 배열 내 평균 계산 등 배열의 값을 하나로 줄이는 동작을 한다.
// 첫번째 매개변수는 `누적 값 (전 단계의 결과)`
const ssafyTest = [90, 99, 78, 80]

const sum = ssafyTest.reduce((total, score) => {
  total += score
  return total
}, 0)
const sumNum = ssafyTest.reduce((total, score) => total + score, 0)

// ssafyTest 배열을 doubleSsafyTest 로 만들기
const doubleSsafyTest = ssafyTest.reduce((preArr, score) => {
  preArr.push(score * 2)
  return preArr
}, [])