console.log('Om Namah Shivaay');
let btn =document.getElementById('btn');
 btn.addEventListener('click',func1);
btn.addEventListener('dblclick',func2);
function func1(e){
    console.log('Thanks',e);
    e.preventDefault();
}
function func2(e){
    console.log('Differentiated Double click',e);
    e.preventDefault();
}
// prevent default is used to bypass the default behaviour
// Mouse down Mouse up type ni ghani events hoy che
btn.addEventListener('mouseup',func3);
function func3(e){
    console.log('Mouse up Eevent',e);
    e.preventDefault();
}
document.querySelector('.no').addEventListener('mouseenter',function(){
    console.log('You entered in no ki territory');

});
// Mouse move ne many more type of events are there 
// Color changing code snippet by offsetX, Offset y and


document.querySelector('.container').addEventListener('mousemove', function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},154)`;
    console.log('You triggered mouse move event')
})