// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
   }
   
   // This function display values
   function display(value) {
    document.getElementById("result").value += value;
   }
   // This function evaluates the expression and return result
   function calculate() {
    var p = document.getElementById("result").value;
    // var q = eval(p);
    const problem = p
    
    const res = opr => {
        const [num1, operation, num2] = opr.split(" ");
        switch (operation) {
            case "+":
              return +num1 + +num2;
            case "/":
              return +num1 / +num2;
            case "-":
              return +num1 - +num2;
            case "*":
              return +num1 * +num2;
            default:
              return "Invalid Operation";
            }
        }
        var r=res(problem)
        document.getElementById("result").value = r;
   }