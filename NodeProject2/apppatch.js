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

//  Id based Searching of Tours for specific endpoints

app.get('/api/v1/tours/:id',(req,res)=>{
    console.log(req.params);
    // Automatically assign a value 
    //  we can have /: multiple nesting of such variable
    //  For non compulsion we can make them optional papramters /:y?
    const id = req.params.id*1;
    //  Tghis is a trick to get the String into number 
    //  The other way to go about this is:
    // let id = parseInt(req.params.id);
    const tour=tours.find(ele=>ele.id==id)
    //  This tour specifically finds the tour by iterating and finding the tour that matched the id
    if(!tour){
        return res.status(404).json({
            message:'Ye wala id kaha hai bhai ',
            status:'mel'
        })
    }
   
    res.status(200).json({
        status:'success',
        // results:tours.length,
        data:{
            tour
            // key value can have same name as tour is the data here
        }
    });

});
//  Patch rquests ki baari 
//  Put receives entire upodated object
//  Patch reveives a part of uodated propetry of the object which is better while using Mongo
app.patch('/api/v1/tours/:id',(req,res)=>{
    res.status(200).json({
        status:'Successful',
        data:{
            tour:'Updated Tour here'
        }
    
})
    
})



let port=3000;
app.listen(port,()=>{
    console.log(`App Running on ${port} port`)
});

// The GET and POST are two different types of HTTP requests. GET is used for viewing something, without changing it, while POST is used for changing something. Essentially GET is used to retrieve remote data, and POST is used to insert/update remote data. 
