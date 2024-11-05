function  addStyle()
{
    let headerElement = document.getElementsByClassName("header")[0];
    let pElement = document.getElementById("data");
    let spanElement = document.getElementsByTagName("span")[0];
    let divElement = document.getElementsByTagName("div")[0];

    headerElement.style.color = 'red';
    headerElement.style.textDecoration  = 'underline';

    pElement.style.color='brown';
    pElement.style.fontSize='18px';
    pElement.style.fontFamily= "'Comic Sans MS'";

    spanElement.style.color = 'green';
    spanElement.style.fontFamily  = 'cursive';

    divElement.style.visibility = 'hidden';


}