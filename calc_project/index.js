let input = document.querySelector("input");
function addval(elementvalue){
    input.value+=elementvalue;
}
function clearval(){
    input.value="";
}
function deleteval(){
    input.value=input.value.slice(0,length-1);
}
function evaluateval(){
    input.value=eval(input.value);
}