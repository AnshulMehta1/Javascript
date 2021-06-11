let express=require('express');
let app=express();
let fs= require('fs');
//  Why do we need Middle Ware
// This is the Middle Ware
app.use(express.json());

// Routing is Straight Forward in Express
// app.get('/',(req, res)=>{
//     res.status(200).json({message: 'Hello from the Server Side',aapOn:'Node-Js'})
// })
// //  Postman can directly test this using api testing at ports as well as urls
// // Post Requests
// app.post('/',(req,res)=>{
//     res.status(200).json({message: 'You can Post This at the End'})
// })

//  Thsi was a route handling for get requests

app.post('/api/v1/tours',(req,res) => {
    // method change thase
    //  Atyaare link same resHe
    // Middleware
    // It sits between the client level and the systems of record, translating the desires of the client into execution within the core systems of record
    //Now we need to manipu;ate the data in dev data json
    let newId=tours[tours.length-1].id +1;  // Incrementing the Id
    let newTour=Object.assign({id:newId},req.body);
    // Creates  a new Object to Merge to Existing objects

   tours.push(newTour);
   fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err=>{
        res.status(201).json({
            status: 'success',
            data:{
                tour:newTour
            }
        })
   })
   // Always asycn as we are in callback function and we cannot block the evennt
   console.log(req.body);
//    res.send('Done');

});

let port=3000;
app.listen(port,()=>{
    console.log(`App Running on ${port} port`)
});

// The GET and POST are two different types of HTTP requests. GET is used for viewing something, without changing it, while POST is used for changing something. Essentially GET is used to retrieve remote data, and POST is used to insert/update remote data. 
