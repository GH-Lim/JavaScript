function printHello() {
  console.log(6)
  console.log('Hello from baz');
}

function printHellob() {
  console.log(7)
  console.log('Hello from baaz');
}

function baz() {
  console.log(3)
  setTimeout(printHello, 3000);
}
function baaz() {
  console.log(5)
  setTimeout(printHellob, 1000);
}
function bar() {
  console.log(2)
  baz();
  console.log(4)
  baaz();
}

function foo() {
  console.log(1)
  bar();
}

foo();