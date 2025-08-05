let newPromise=new Promise((reSolve,reJect)=>{
    let dataReceived=false;
    if(dataReceived){
        reSolve("data received succesfully");
    }
    else{
        reJect("data not received");
    }
})

newPromise.then(
    (message)=>{
        console.log(message+" "+"Success");
    }
).catch(
    (error)=>{
console.log(error+" "+"failure");

    }
)
