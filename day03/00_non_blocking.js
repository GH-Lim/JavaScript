function sleep_3() {
  setTimeout(function() {
    console.log('3 Wake Up!')
  }, 3000) // ms 단위
} // 비동기 함수
function sleep_1(){
  setTimeout(function() {
    console.log('1 Wake Up!')
  }, 1000)
}
console.log('Start Sleeping')
sleep_3()
sleep_1()
console.log('End of Program')
