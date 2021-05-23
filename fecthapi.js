//  Ama news walo pan project kari laisu 
//  News api by xhr object pna kri laisu but using the feth api
let mtBtn =document.getElementById("mtBtn");

let content =document.getElementById("content");
// function getData() {
//     // let url='https://newsapi.org/v2/everything?' +
//     // 'q=Apple&' +
//     // 'from=2021-05-18&' +
//     // 'sortBy=popularity&' +
//     // 'apiKey=5d985345c6c74446a6101ae4635c2d3c';
//     let url="anshul.txt";
//     let url1="https://api.github.com/users"
//     fetch(url1).then((response)=> {
//         return response.text();
//     }).then((data)=> {
//         console.log(data);
//     })
// }

//  AAMA aapdane get data from JSON file malse


function getData() {
    // let url='https://newsapi.org/v2/everything?' +
    // 'q=Apple&' +
    // 'from=2021-05-18&' +
    // 'sortBy=popularity&' +
    // 'apiKey=5d985345c6c74446a6101ae4635c2d3c';
    let url="anshul.txt";
    let url1="https://api.github.com/users"
    fetch(url1).then((response)=> {
        return response.json();
    }).then((data)=> {
        console.log(data);
    })
}


//  EMa j change kari post request maarie

function PostData() {
    
    let url="https://reqres.in/api/users";
    data={
        "name": "morpheus123456",
        "job": "leader"
    }
    params={
        method: "POST",
        mode: "no-cors",
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Credentials" : true ,
            'Access-Control-Allow-Origin':'*'
            // setHeader("Access-Control-Allow-Origin", "*")
        },
         body:JSON.stringify(data)
        // The stringify function to be used only if it is Data in JSON
        // body: data
    }
    fetch(url,params).then((response)=> {
        return response.json();
    }).then((data)=> {
        console.log(data);
    })
}

console.log(`Before Data is fetched`);
getData();
console.log(`After Data is fetched`);
// Async che etle aade dhahd chalse e sync ma laava j async await functions che 
PostData();
