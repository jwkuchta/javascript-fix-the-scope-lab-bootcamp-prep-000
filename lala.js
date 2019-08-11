function fibonacci(num) {
  var result = 0
  for(let i = 0; i < num; i ++) {
    if(i <= 1) {
      result = 1
    } else {
      result = fibonacci(num-1) + fibonacci(num-2)
    }
  }
}


console.log(fibonacci(10))
