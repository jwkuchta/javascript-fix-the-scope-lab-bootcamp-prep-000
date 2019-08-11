function fibonacci(num) {
  for(let i = 0, i < num, i++) {
    if(i <= 1) {
      return 1
    } else {
      return fibonacci(num-1) + fibonacci(num-2)
    }
  }
}


console.log(fibonacci(10))
