const h1=document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

function btnOnClick() {
    const sumaInputs = input1.value + input2.value; //acá solo se concatenan, no se suman
    pResult.innerText = "Resultado: " + sumaInputs;
}

//Si quiero es sumar y no concatenar, haría esto 
//(Both Number() and parseInt() are often used to convert a string to number):

//  function btnOnClick() {
//   console.log(number(input1.value) + parseInt(input2.value));
// }
