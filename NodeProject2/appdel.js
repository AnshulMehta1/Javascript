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
let tours=JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))
app.get('/api/v1/tours',(req,res)=>{
    res.status(200).json({
        status:'success',
        results:tours.length,
        data:{
            tours
            // key value can have same name as tour is the data here
        }
    })

})
//  Thsi was a route handling for get requests



//  Delete
//  204 means no content
app.patch('/api/v1/tours/:id',(req,res)=>{
    res.status(204).json({
        status:'Successful',
        data:{
            tour:null
        }
    
})
    
})



let port=3000;
app.listen(port,()=>{
    console.log(`App Running on ${port} port`)
});

// The GET and POST are two different types of HTTP requests. GET is used for viewing something, without changing it, while POST is used for changing something. Essentially GET is used to retrieve remote data, and POST is used to insert/update remote data. 
