var students = [

    { name: "James", city: "Chicago"},

    { name: "Patrick", city: "London"},

    { name: "Mark", city: "Manchester"},

    { name: "Joe", city: "Phoenix"}
    
]

const gradStudents = [

    { name: "James", city: "Chicago"},

    { name: "Patrick", city: "London"},

    { name: "Mark", city: "Manchester"},

    { name: "Joe", city: "Phoenix"}
    
]

var studentsUpdate = [ {state: "kansas", dateOfBirth: "4/1/1973", payRate: "$120,000" }];
for (let i = 0; i <= 3; i++){
    console.log(students[i]); // before  
    students[i].state = studentsUpdate[0].state;
    students[i].birthDate = studentsUpdate[0].dateOfBirth;
    students[i].payRate = studentsUpdate[0].payRate;
    console.log(students[i]);
      
}

const newStudents = [ {state: "kansas", dateOfBirth: "4/1/1973", payRate: "$120,000" }];
for (let i = 0; i <= 3; i++){
    console.log(gradStudents[i]); // before  
    gradStudents[i].state = newStudents[0].state;
    gradStudents[i].birthDate = newStudents[0].dateOfBirth;
    gradStudents[i].payRate = newStudents[0].payRate;
    console.log(gradStudents[i]);
      
}

//As i was going through writing the code I was expecting the value to be displayed as I planed by adding the values to the array the displayed out put was as I expected. It displayed the values before and after adding new information the students object.

const multipliers = [1,2,3,4,5,6,7,8,9,10,11,12]
const multiplican = [1,2,3,4,5,6,7,8,9,10,11,12]
const tableStart = 1
const tableEnd = 12
const table = []
//const xxx = multipliers.entries()
for (let i = tableStart; i < tableEnd; i++  ){
  let z = 0;
    for(let j = 0; j < multiplican.length ; j++){
         let x = multiplican[j];
         let y = multipliers[(i)];
         z = x * y
        // console.log(z);
        
      console.log( (x) + "*"  + (y) + "=" + (z));
       
      // console.log(x);
      // x = 0;

       
        
    }
        
    
}

