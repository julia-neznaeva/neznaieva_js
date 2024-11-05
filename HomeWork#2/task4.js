function getCircleLength(r)
{
    try{
        r=+r;
        if(isNaN(r) || r<1){
            throw new Error("Invalid radius");
        }
        return 2*Math.PI*r
    }catch(error)
    {
        alert( "Incorrect radius - please, enter numeric value!");
    }
}

function mainFunctionTask4()
{
    let r= prompt("Enter radius. The value has to be numeric, more than 0");
 
    document.getElementById("resultH2T4").innerHTML="CircleLength is : "+ getCircleLength(r);
    
}