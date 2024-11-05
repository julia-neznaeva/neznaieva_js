function deleteItem(arr, item)
{
    let indexWantedElement = arr.findIndex(i=>i==item)
    if(indexWantedElement>-1){
        arr.splice(indexWantedElement, 1);
    }
    return arr;
}

function mainFunctionTask3()
{
    let arr = [3, 12, 16, 19, 21, 33];
    let wantedElement= prompt("Which item has to be deleted?")
    
     document.getElementById("resultH2T3").innerHTML="Result: "+ deleteItem(arr, wantedElement);

}