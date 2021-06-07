let fs=require('fs');

let crypto=require('crypto');
setTimeout(() => console.log("Timer 1 exec"),0);
// Expires after 0 seconds
setImmediate(()=> console.log("Immediately finished"));

fs.readFile("test-file.txt",()=>{
    console.log("Reading Complete")
    setTimeout(() => console.log("Timer 2 exec"),3000);
    setTimeout(() => console.log("Timer 3 exec"),3000);
// Expires after 0 seconds
    setImmediate(()=> console.log("Immediately 2 finished"));
    process.nextTick(() => console.log("Process Next Tick"));

    crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
    console.log(Date.now() - start, "Password encrypted");
  
    crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
    console.log(Date.now() - start, "Password encrypted");
  
    crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
    console.log(Date.now() - start, "Password encrypted");
  
    crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
    console.log(Date.now() - start, "Password encrypted");

});
console.log("Hello ");
//  The Top Level Code gets Exec First 
// Console Log Hello is top Level Code 
// Output when not running in event loop ad Readinf Takes most time

// Hello 
// Timer 1 exec
// Immediately finished
// Reading Complete


//  Outpur in Call back when Event Loop is Active
// Hello 
// Timer 1 exec
// Immediately finished
// Reading Complete
// Immediately 2 finished
// Timer 2 exec
//  Set Immediately pela thaay
//  Polling Queue is the reason as it waits  till there are elements in the queue
//  Process.Next tick to savthi pela thaay