let factorial = 1;
let n=parseInt(document.getElementById("txt").value)
function calculateFactorial(n) {
  if (n === 0) {
    return;
  }
  factorial *= n;
  calculateFactorial(n - 1);
}

// Example usage:
console.log(factorial);