// WARNING 

// The Recursive implementation is REALLY slow with high value 

// For your own sake try it with a value less than 50

function fibonacciRecursive(n) {
  if (n <=1) {
    return n
  } else {
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
  }

}

console.log(fibonacciRecursive(50))