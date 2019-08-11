/*function fibonacci(num) {
  let result = 0
  let fibArray = []
  if(num <= 1) {
    result = 1
  } else {
    while(num > 1; num++) {
      result = fibArray.push(fibonacci(num-1) + fibonacci(num-2))
    }
  }
  return result
}
*/

function fibonacciWithMemo(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacciWithMemo(num - 1, memo) + fibonacciWithMemo(num - 2, memo);
}




//console.log(fibonacci(1))
//console.log(fibonacci(2))
//console.log(fibonacci(3))
//console.log(fibonacci(4))
//console.log(fibonacci(5))
console.log(fibonacciWithMemo(6))
