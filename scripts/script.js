
let ACIT1310 = {
    code: "ACIT 1310",
    name: "Technical Math for IT",
}
let ACIT1620 = {
    code: "ACIT 1620",
    name: "Fundamental Web Technologies",
}
let ACIT1515 = {
    code: "ACIT 1515",
    name: "Scripting for IT",
}
const courselist =[ACIT1515, ACIT1620, ACIT1310];

let input = "";
let i = 0;
do{
    if(i === 0){
    input = prompt("Enter course number: ");
    }
    else{
    input = prompt("Note a valid entry, please enter course code: ");
    }
    i++
}
// check if input is number and is 4 characters long
while(isNaN(Number(input)) || input.length != 4);

let arrcheck = 0;
for (let course of courselist){
   if(course.code.includes(input)){
   console.log(`Yes, I am taking the course: ${course.code} - ${course.name}`)
   }
   else{
        arrcheck += 1;
         }
}

if (arrcheck === courselist.length){
    let addedinput = {
        code: input,
        name: null,
    }
    courselist.unshift(addedinput)
    console.log("Successfully added new course")
}
