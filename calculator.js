var input = process.argv;
var operator = input[2];
var first = parseFloat(input[3]);
var second = parseFloat(input[4]);

if (operator === "add") {
    console.log(first + second)
} else if (operator === "subtract") {
    console.log(first - second)
} else if (operator === "multiply") {
    console.log(first * second)
} else if (operator === "divide") {
    console.log(first / second)
} else if (operator === "remainder") {
    console.log(first % second)
} else if (operator === "exp") {
    console.log(first ** second)
} else {
    console.log("You're not making any sense, fool")
}