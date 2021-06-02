// Routing means implementing different actions for different URLs.
// Routing is the process of selecting a path for traffic in a network or between or across multiple networks.
// Express is a good too for roouting
let var1='Jai Shree Ram';
let fs=require('fs');
let http=require('http');
let url=require('url');
const { Server } = require('tls');
// server
let data=fs.readFileSync(`../dev-data/data.json`,'utf-8');
let ProductData = JSON.parse(data);
   
        // res.end('This is APIs ');
        // res.writeHead(200, {'Content-Type': 'application/json'})


let server=http.createServer((req, res) =>{
    console.log(req.url);
    let pathName=req.url;
    if (pathName==='/'  || pathName==='/overview'){
        res.end('Hello from Overview');

    }
    else if (pathName==='/product'){
        res.end('This is Products ');
    }
    else if (pathName==='/api'){
        
        // fs.readFile(`../dev-data/data.json`,'utf-8',(err,data)=>{
        //     let ProductData = JSON.parse(data);
        //     console.log(ProductData);
        //     // res.end('This is APIs ');
           res.writeHead(200, {'Content-Type': 'application/json'})
         res.end(data);
        //  });

        // dirname
        // relative referencing 
        // many ways to do it
        // .. thi 1 directory upar joi ne devdata ma jaine pachi data_json collect kari
       


    }
    else{
        res.writeHead(404,{
            // header here
            'Content-Type':'text/html',
            'my-own-header':'Hello-World'

        });
        res.end(`<h1>Page Not found</h1>`);
    }

})
server.listen(8000,'127.0.0.1',()=>{
    console.log('listening To Requests from port 8000');
});
// This is a simple routing
// Different pathnames maate different actions
// Pathname has got to do nothing with file names and stuff

//  Now we will use the API for
//  Here I'll use the data.json
