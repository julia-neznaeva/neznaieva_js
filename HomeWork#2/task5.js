function checkId (input)
{
    try{
    input=+input;
    
    if (input === 0) {
        throw new Error("Input is empty");
    }

    if (isNaN(input)) {
        throw new Error("Input is not a number");
    }

    if (input > 1000 || input < 1) {
        throw new Error("Input is not in the correct range (1-1000)");
    }
    return "Id is valid";
    } catch (error) {
        return error.message;
    }
}

function mainFunctionTask5()
{
    let input = prompt("Enter your id ");
    document.getElementById("resultH2T5").innerHTML=checkId(input);
}