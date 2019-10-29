// Array helper method

const colors = ['red', 'green', 'blue', 'salmon']

for (const color of colors) {
  // console.log(color)
}

// colors.forEach(function(color) {
//   console.log(color)
// }) // forEach 는 array가 갖고있는 method 함수를 인자로 받을 수 있다.

// forEach -> Loop 를 대신 돌아줌
colors.forEach(color => console.log(color))

// map -> 배열 내의 모든 요소에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열 return
// 일정한 형식의 새로운 배열을 만들 떄 사용한다.

const numbers = [1, 2, 3, 4]

const sqr_numbers = numbers.map(number => number ** 2) // { return number * 2 }

//
const sqrt_numbers = sqr_numbers.map(number => Math.sqrt(number))
// sqr_numbers.forEach(number => console.log(Math.sqrt(number)))
sqr_numbers.map(Math.sqrt)

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