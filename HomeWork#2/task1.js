let num1;
let num2

function sum()
{
    return num1+num2;
}

function product()
{
    return num1*num2;
}
function square()
{
    return Math.pow(num1, num2);
}

function run(callback) {
    document.getElementById("resultH2T1").innerHTML="Result: "+callback();
}

function mainFunctionTask1()
{
    num1 = +prompt("Enter num1");
    num2 = +prompt("Enter num2");
    let operation = prompt("Enter operation name(sum, product, square):");

    if (operation === "sum") {
        run(sum);
    } else if (operation === "product") {
        run(product);
    } else if (operation === "square") {
        run(square);
    } else {
        console.log("Something went wrong");
    }
}
