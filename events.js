let EventEmitter=require("events");
let fs=require("fs");
let http=require("http");
let myEmitter=new EventEmitter;
// Event is Emitted

myEmitter.on("newEvent", () => {
    console.log("There was a new Event");

  });
myEmitter.on("newEvent", () => {
    console.log("Event by Amaze");

  });

// Args can be passed in the emitter emit

myEmitter.on("newEvent",stock=>{
    console.log(`There are now ${stock-1} items`);

});
myEmitter.emit("newEvent",10);
//  The event can also be put in a super class  , const myEmitter = new Sales();
// Example
// class Sales extends EventEmitter {
//   constructor() {
//     super();
//   }
// }
// In place of new Event we can be able to write Sales 
// -------------------------------------------------------------------------------------------------------//
// Server stuff
let server =http.createServer();


server.on("request",(req,res)=>{
console.log("sndibufsv");
});
server.on("request", (req, res) => {
    console.log("Request received!");
    console.log(req.url);
    res.end("Request received");
  });

  server.on("close", () => {
    console.log("Server closed");
  });
  
  server.listen(8000, "127.0.0.1", () => {
    console.log("Waiting for requests...");
  });
    
