function findElem(arr, el)
{
    return arr.find(item=> item==el);
}

function mainFunctionTask2()
{
    const arr = [1, 2, 3, 4, "Alex", 10, "Nick"];


    let elem = prompt("Enter wanted element");
    console.log(elem);

     document.getElementById("resultH2T2").innerHTML="Result: "+ Boolean(findElem(arr, elem));

}