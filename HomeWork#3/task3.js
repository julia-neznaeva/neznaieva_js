
    let liveButton = document.getElementById("liveButton");

    liveButton.addEventListener('click', () => {
       addDiv("Mouse is pressed!");
    });

    liveButton.addEventListener('mouseover', () => {
        addDiv("Mouse is on me!");
    });

    liveButton.addEventListener('mouseout', () => {
        addDiv("Mouse is not on me!");
    });

function addDiv(textContent){

    let div = document.createElement('div');
    div.innerHTML =textContent;
    let divResult = document.getElementById('result');
    divResult.appendChild(div);
}