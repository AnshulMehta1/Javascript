const students=[
    {name:'Anshul',subject:'WEB DEVELOPMENT, DEVOPS, ML/DL/AI, PRODUCT MANAGER'},
    {name:'hnwhfrbfuf',subject:'AI'}
     
]
//function enroll students
// function get students
// Call back is a function in a function
function enrollStudent(student,callback){
    setTimeout(() =>{
        students.push(student);
        console.log('STUDENT HAS BEEN ENROLLED'); 
        callback();
    },3000);
}

function getStudents(){
    setTimeout(function() {
        let str='';
        students.forEach(function(student){
            str+=`<li> ${student.name}</li>`;
        })
        document.getElementById('students').innerHTML=str;
        console.log('Studentds have been fecthed');
    },3000);
}
let newStudent={name:'RAM', subject:'Everything'};
enrollStudent(newStudent,getStudents);

// getStudents();