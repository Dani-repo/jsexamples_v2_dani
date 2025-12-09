const failed = false;
//manually toggle this flag to test the promise

const myPromise = new Promise((resolved, reject) => {

        // if failed (true), return a reject
        if(failed)
            reject("fail promise");
        else
            resolved("resolved!");
});

function success(result){
    console.log(result);
}

function onFailed(error){
    console.log(error);
}

myPromise
.then((result)=>{
    //print the resolve statement
    success(result);
})
.catch((error)=>{
    //print the error (reject)
    onFailed(error);
})
