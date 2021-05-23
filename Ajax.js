// set of technologies
// asynchronous javascript , xml,etc
// Ajax helps in fteching asycn calls wothout blocking the page 
// No Reloads and Refreshes 
 // JSON Or XML for data transfer 
 // Saves Network Bandwith
 //Interactive
 // Data transfer in any protocol
 //ajax uses XHR XMLHTTPREQUEST Object to achive this , Vanilla(purist) Javascript here
 // Clients interacct with the server 
 let fetchbtn=document.getElementById('fetchbtn');
 fetchbtn.addEventListener('click',function1);

 function function1(){

    console.log('You Clikcked This')
     // Instantiate an xhr Object
     const xhr=new XMLHttpRequest();
     // Open the Object 
    //  xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
    //  // Get 
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    //  POST 
     // kyaathi --> 2nd Argument
     // True - asynchronous maate , non blockin else false for synch
    // What to do on progress
    xhr.onprogress=function(){
        console.log('On Progress');
    }

// When the response is ready
// HTTP Status codes ne protocols ma khabar hovi joie

    xhr.onload=function(){
        if (this.status==200){ 
        console.log(this.responseText );
        }
        else{
            console.log("Insert Other File");
        }
        // CONSOLE.ERROR PAN KARI SAKIE
    }
    // Recieve karva maate send karvii pade etle maate pela
 
    params = `{"name":"test34sad545","salary":"123","age":"23"}`;
    xhr.send(params);

    console.log("We are done!");
    // Similarly ready state value pan aavi sake ne ena maate pan ek funcrion lakhi skaaay che 
 }
console.log('We are Done');

// This is printed first because asynchronous che
// Post request sammple
// Post request ma aapde data pan moklavo pade joie
// xhr.getResponseHeader('Content-Type','application/x-www-form-urlencoded');


let popBtn=document.getElementById('popBtn');
popBtn.addEventListener('click',poHandler);

function poHandler(){
    console.log('You clicked PopHandler');


const xhr1=new XMLHttpRequest();

// Initiale Instance
xhr1.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);

//Onload
// JSON  parse kari
xhr1.onload=function(){
    if(this.status === 200){
    let obj=JSON.parse(this.responseText);
    console.log(obj);
    let list =document.getElementById('list');
    str='';
    for (key in obj){
        str+=`<li>${obj[key].employee_name} </li>`;


    }
    list.innerHTML = str;
    xhr.send();
    console.log("We are done fetching employees!");
}
}
}