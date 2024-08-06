let factorial = 1;

    function calculateFactorial() {
      const numberInput = document.getElementById("numberInput");
      const number = parseInt(numberInput.value);

      if (isNaN(number)) {
        document.getElementById("result").textContent = "Invalid input. Please enter a number.";
        return;
      }

      factorial = 1; // Reset factorial for each calculation
      calculateFactorialRecursive(number, (result) => {
        document.getElementById("result").textContent =` Factorial of ${number} is ${result}`;
      });
    }

    function calculateFactorialRecursive(n, callback) {
      if (n === 0) {
        callback(factorial);
        return;
      }
      factorial *= n;
      calculateFactorialRecursive(n - 1, callback);
    }