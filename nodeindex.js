const hello='Jai Shree RAM';
console.log(hello);
// node is built along node_modules
//  all additional functionalities are built in a module 
// let fs=require('fs');
//  file system module 
//  Object retrun karse with functions to read a
// let text=fs.readFileSync('D:/Desktop/Technologies/Javascript/NodeJS/complete-node-bootcamp/1-node-farm/starter/txt/input.txt','utf-8');
// console.log(text);
//  File paths maate / j thase 
// How to write in file system
// let outText=`Jai Shree Krishna ${text}.\n New Line Om Namah Shivaay on ${Date.now()}`;
// fs.writeFileSync('D:/Desktop/Technologies/Javascript/NodeJS/complete-node-bootcamp/1-node-farm/starter/txt/output.txt',outText);
// console.log("File has been written");
//  Reading Async 
// let text1=fs.readFile('D:/Desktop/Technologies/Javascript/NodeJS/complete-node-bootcamp/1-node-farm/starter/txt/input.txt','utf-8',(error,data) => {
//     // console.log(data);
// });
// console.log(text1);
// console.log(`Asynchronous check`);
//  This gets printed first meaning that the read write is happening async.

//  Nesting to display callbacks
// let text2=fs.readFile('D:/Desktop/Technologies/Javascript/NodeJS/complete-node-bootcamp/1-node-farm/starter/txt/start.txt','utf-8',(error,data1) => {
//     if (error) return console.log('Fixable Issue hai ');
//     console.log(data1);
//     let text3=fs.readFile(`D:/Desktop/Technologies/Javascript/NodeJS/complete-node-bootcamp/1-node-farm/starter/txt/${data1}.txt`,'utf-8',(error,data2) => {
//         console.log(data2);
//         let text4=fs.readFile(`D:/Desktop/Technologies/Javascript/NodeJS/complete-node-bootcamp/1-node-farm/starter/txt/append.txt`,'utf-8',(error,data3) => {
//             console.log(data3);
//             //  Here we can also write asynchronously 
//             fs.writeFile(`D:/Desktop/Technologies/Javascript/NodeJS/complete-node-bootcamp/1-node-farm/starter/txt/output.txt`,data3+ `\n`+data2+`\n`+ data1,error=>{
//                console.log(`File success written😇`) ;
//             });
//         });
//     });
// });
//  Here there is a dependency 
// console.log(`Asynchronous check`);
// Routing means implementing different actions for different URLs.
// Routing is the process of selecting a path for traffic in a network or between or across multiple networks.
// Express is a good too for roouting

let var1='Jai Shree Ram';
let fs=require('fs');
let http=require('http');
let url=require('url');
const { Server } = require('tls');
// server
let tempOverview=fs.readFileSync(`../templates/template-overview.html`,'utf-8');
let tempCard=fs.readFileSync(`../templates/template-card.html`,'utf-8');
let tempproduct=fs.readFileSync(`../templates/template-product.html`,'utf-8');
let data=fs.readFileSync(`../dev-data/data.json`,'utf-8');
let ProductData = JSON.parse(data);
// We have to get the data parsed which is an array of objects
// Thenn we need to place the data into the place holders
// This is the way we will be able to diplay data from the JSON File onto the page
let replaceTemplate=(temp,product)=>{
    let output=temp.replace(/{%PRODUCTNAME%}/g,product.productName);
    //  /g for global scope so that all the appearances get replaced
    output =output.replace(/{%IMAGE%}/g,product.image);
}

let server=http.createServer((req, res) =>{
    console.log(req.url);
    let pathName=req.url;
    if (pathName==='/'  || pathName==='/overview'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        let cardsHTML=dataObj.map(ele=>replaceTemplate(tempCard,ele))
        // Key values pairs banavse, for each item there will be a card and elements will the objects mapped to it

        res.end(tempOverview);

    }
    else if (pathName==='/product'){
        res.end(tempProduct);
    }
    else if (pathName==='/api'){
        
        res.writeHead(200, {'Content-Type': 'application/json'})
         res.end(data);

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
