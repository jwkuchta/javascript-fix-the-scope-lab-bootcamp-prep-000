function fibonacci(num) {
  let result = 0
  if(num <= 1) {
    result = 1
  } else {
    result = fibonacci(num-1) + fibonacci(num-2)
  }
  return result
}


console.log(fibonacci(10))
