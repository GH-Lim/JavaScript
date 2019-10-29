// Types and Operators (타입과 연산자)

// Primitve Types

// Numbers
const a = 13
const b = -5
const c = 3.14 // float
const d = 2.998e8
const e = Infinity
const f = -Infinity
const g = NaN // Not a Number 숫자가 아닌 값

console.log(a, b, c, d, e, f, g)

console.log(5 / 'dd')


// String

const sentence1 = 'Ask and go to the blue' // 우리는 싱글퀕 씀
const sentence2 = "Ask and go to the blue"

const sentence3 = `Ask and go to the blue`

console.log(sentence1, sentence2, sentence3)
// 따옴표는 줄바꿈이안됨
// 대신 escape sequence 사용가능

// const word = '안녕
// 하세요'
const word = '안녕\n하\t세\\요'
console.log(word)

// 백틱은 줄바꿈 가능 escape sq 사용불가
// Template literal 사용가능
const word2 = `안녕
하세요`
console.log(word2)
// Template Literal
const age = 10
const message = `홍길동의 나이는 ${age}입니다.`
console.log(message)

console.log('Happy' + 'Hacking')

// Boolean
true
false

// Empty Value
// 값이 존재하지 않음을 표현하는 값
undefined
null

let firstName // 선언하고 할당하지 않음 => undefined

let lastName = null // 우리가 의도적으로 값이 없음을 표시할 때
let students = {}
students.jason // undefined

typeof null // object
typeof undefined // undefined

// Operators (연산자)
// 할당 연산자

let x = 0
x += 10
x -= 3
x *= 3
x++
x--

// 비교연산자
3 > 2
3 <= 2

// 문자열 비교
// 영어 소문자가 대문자보다 큼, 알파벳은 오름차순

'A' < 'B' // true
'A' < 'a' // true
'가' < '나' // true

// 동등 연산자 (==)
// 메모리 저장된 값이 같은지
// (JS 엔진이 자동으로 형변환) => 동등 연산자의 사용은 지양한다.
1 == '1' // true

// 일치 연산자 (===)
1 === '1' // false

// 논리 연산자
// and
1 && 1 // true
true && false // false

// or
true || false // true
false || false // false

// not
!false // true

// 삼항 연산자
// 가장 앞의 boolean 값이 참이면 : 앞의 값이 반환, 그렇지 않다면 : 뒤의 값이 반환

let flag = true
const result = flag ? '참이니' : '거짓이니'
console.log(result)

