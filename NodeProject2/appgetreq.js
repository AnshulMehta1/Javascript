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
