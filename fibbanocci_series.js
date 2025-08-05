let x1=0; 
let x2=1;
let x3=0;
var n=5;
function fibbanocci(){
    for(let i=0;i<n;i++){
        x3=x1+x2;
        x1=x2;
        x2=x3;

    }
    return console.log(x3);
}

fibbanocci();