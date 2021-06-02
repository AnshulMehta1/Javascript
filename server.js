let var1='Jai Shree Ram';
let http=require('http');
const { Server } = require('tls');
// server
let server=http.createServer((req, res) =>{
    console.log(req);
    res.end('Hello from the server.Jai Shree Ram');
})
server.listen(8000,'127.0.0.1',()=>{
    console.log('listening To Requests from port 8000');
});
// Port Number che
// Callback function ma message aave che console par
// It doesn't exit because of console in terminal because of event loop
// It waits for the request
// 