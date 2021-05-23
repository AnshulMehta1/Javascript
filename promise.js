// Promise
// Stages
// Resolved
// Rejected
// Pending
// Promise ek object che je ek function le. e functions bija be functions le resolve and reject

function func1(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            const error  =true;
            if (!error){
            console.log("Your promise has been resolved");
            resolve();
            }
            else {
                console.log("Your promise not fulfilled");
            }
        },2000);
    });
}

func1().then(function(){
    console.log('Thanks for resolving ');
}).catch(function(error){
    console.log('sfilsfbsfb');

});
// callback no substitue che promise 
