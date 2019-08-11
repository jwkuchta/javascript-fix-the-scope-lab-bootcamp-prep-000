function fibonacci(num) {
  let result = 0
  if(num <= 1) {
    result = 1
  } else {
    result = fibonacci(num-1) + fibonacci(num-2)
  }
  return result
}


console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))
