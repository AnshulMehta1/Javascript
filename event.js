// What are events
// Interact thaay click , some actions and e thaay pachi ek code run thavo joiye
// e event capture karvi ne pachi aapde e par thi code run karvo e events

// Add Event Listeners e event ne detect karine saambhde
// eni argument ma ek evetn jaay

document.getElementById('heading').addEventListener('mouseover',function(e){
    console.log('You have pressedon the heading');
    variable=e.target.className;
    variable2=e.target.id;
    variable3=e.offsetX;
    console.log(variable2);
    console.log(variable);
    console.log(variable3);
    console.log(e);
    // location.href ='//www.yt.com'
});
// Click ek typoe ni event che 
// Multiple class name , class list , array . from thi iterable , id , heading badhu aapi j de che easily 
// Function ni argument ek event object che

// Client X Clinet Y e windows na relarive hoy , whereas offset khaali site screen jetle ne relative hoy