const axios = require('axios')
const url = 'https://jsonplaceholder.typicode.com/posts/1'

axios.get(url)
  .then(function(response) { // 요청이 도착하면 이 함수를 실행시켜라
    console.log(response.data)
  })