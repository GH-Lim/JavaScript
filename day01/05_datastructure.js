const numbers = [1, 2, 3, 4]

numbers[0] // 1
numbers[-1] // undifined
numbers.length // 4

// 배열뒤집기 => 원본 파괴
numbers.reverse() // 원본도 바꿈
// [4, 3, 2, 1]
numbers.reverse()

// 배열 마지막에 아이템 추가하기
numbers.push('abc') // 5 가 반환됨 => 추가 후 배열 길이 반환

// 마지막 요소 삭제 후 해당 요소 반환
numbers.pop() // 'abc'

// 가장 앞에 요소 추가
numbers.unshift('a')

// 가장 앞 요소 삭제 후 해당 요소 반환
numbers.shift()

//
numbers.includes(0) // false
numbers.includes(1) // true

// 특정 아이템의 인덱스를 찾아서 반환 (같은값이 여러개일 경우 가장 앞 인덱스)
numbers.indexOf(1) // 0
numbers.indexOf(0) // -1 없으면 -1


// 배열에 있는 아이템들을 합친 후 문자열로 반환
numbers.join('') // seperator 사용 가능

const name = 'jason'

const me = {
  name, // 변수의 이름과 key 의 이름이 같다면 name: name, => name, 으로 생략가능
  // Object Literal
  'phone number': '010-1234-5678', // phoneNumber
  appleProducts: {
    macbook: '2018pro',
    iphone: '7',
  }
}


// JSON

const jsonData = JSON.stringify(me) // 직렬화 => JS Object를 스트링화

const parsedData = JSON.parse(jsonData) // 역직렬화 => String 을 JS Object로
