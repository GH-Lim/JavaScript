// if
// const username = prompt('안녕하세요? 당신은 누구세요?')

// let message = ''

// if (username === 'ssafy') {
//   message = '<h1>싸피</h1>'
// } else if (username === 'admin') {
//   message = '<h1>어드민</h1>'
// } else {
//   message = `<h1> Welcome ${username} </h1>`
// }

// document.write(message)


// switch 문
// break 필요
const username = prompt('이름을쓰세요')

switch (username) {
  case 'ssafy': {
    message = '<h1>싸피</h1>'
    break
  }
  case 'admin': {
    message = '<h1>어드민</h1>'
    break
  }
  default: {
    message = `<h1>${username}</h1>`
  }
}
document.write(message)