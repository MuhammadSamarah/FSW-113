//CLO1: JavaScript
let studentArray = Array(10);
console.log(studentArray.length);
// OutPut: A) 10
console.log(studentArray);
//OutPut: B) [ <10 empty items> ]


//CLO2: JavaScript
let studentArrays = Array.of(10);
console.log(studentArrays.length);
// OutPut: A) 1
console.log(studentArrays);
//OutPut: B) [ 10 ]


//CLO3: JavaScript
let grades = [90,98,78,99];
let studentGrades = Array.from(grades, g=>g * 110);
console.log(studentGrades.length);
//OutPut: A) 4
console.log(studentGrades);
//OUtPut: B) [9900,10780,8580,10890]


//CLO4: JavaScript
let grade= [90,98,78,99];
let studentGrade = Array.from(grade,function(g){
    return g * this.percentageincrement
},{percentageincrement:1.10})
console.log(grade);
//OutPut: A) [90,98,78,99]


//CLO5: JavaScript
let grad = [90,98,78,99]
let studentGradess = Array.from(grad, g=>{
    return g * this.percentageincrement
},{percentageincrement:1.10})
console.log(studentGrades);
//OutPut: A) [9900,10780,8580,10890]


//CLO6: JavaScript
let gradess = [90,98,78,99]
let studentGradesss = gradess.find(v=>v==90);
console.log(studentGradesss);
//OutPut: A) 90


//CLO7: JavaScript
let gra = [90,98,78,99]
let studentGra = gra.find(v=>v=90);
console.log(studentGra);
//OutPut: A) 90


//CLO8: Javascript
let gradis = [90,98,78,99]
let studentGradis = gradis.map(v => v * .090);
console.log(studentGradis);
//OutPut: A)  [ 8.1, 8.82, 7.02, 8.91 ]


//CLO9: JavaScript
let gradey = [90,98,78,99]
let studentGradey = gradey;
console.log(studentGradey);
//OutPut: Undefined


//CLO10: JavaScript
let studenten = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map();
people.set(studenten, "Student");
people.set(adjunct, "Adjunct");
console.log(people);
//OutPut: Map(2) { { name: 'John Masson' } => 'Student', { name: 'Dave Larson' } => 'Adjunct'}


//CLO11: JavaScript
let student1 = {name:'John Masson'}
let adjunct1 = {name:'Dave Larson'}
let people1 = new Map();
people1.set(student1, "Student");
people1.set(adjunct1, "Adjunct");
people1.delete(student1);
console.log(people1);
//OutPut: A)  Map(1) { { name: 'Dave Larson' } => 'Adjunct' }


//CLO12: javaScript
let student2 = {name:'John Masson'}
let adjunct2 = {name:'Dave Larson'}
let people2 = new Map();
people2.set(student2, "Student");
people2.set(adjunct2, "Adjunct");
people2.clear()
console.log(people2);
//OutPut: A) Map(0) {}


//CLO13: javascript
let student3 = {name:'John Masson'}
let adjunct3 = {name:'Dave Larson'}
let people3 = new Map();
people3.set(student3, "Student");
people3.set(adjunct3, "Adjunct");
let result = people3.has(student3);
console.log(result);
//OutPut: A) TRUE


//CLO14: JavaScript
let student4 = {name:'John Masson'}
let adjunct4 = {name:'Dave Larson'}
let people4 = new Map();
people4.set(student4, "Student");
people4.set(adjunct4, "Adjunct");
let result1 = people4.keys(student4);
console.log(result1);
//OutPut: A) [Map Iterator] { { name: 'John Masson' }, { name: 'Dave Larson' } }


//CLO15: javascript
let student5 = {name:'John Masson'}
let adjunct5 = {name:'Dave Larson'}
let people5 = new Map();
people5.set(student5, "Student");
people5.set(adjunct5, "Adjunct");
let result3 = people5.values(student5);
console.log(result3);
//OutPut: A) [Map Iterator] { 'Student', 'Adjunct' }


//CLO16 JavaScript 
let student6 = {name:'John Masson'}
let adjunct6 = {name:'Dave Larson'}
let people6 = new WeakMap()
people6.set(student6, "Student")
people6.set(adjunct6, "Adjunct")
ladjunct = null;
console.log(people.size);
//OutPUt: Undefined


//CLO17: Javascript
let student7 = {name:'John Masson'}
let adjunct7 = {name:'Dave Larson'}
let people7 = new Set()
people7.add(student7)
people7.add(adjunct7)
people7.add(adjunct7)
console.log(people7.size)
//OutPut: A) 3


let students8 =[ {name:'John Masson'}, {name:'Don Vasco'}, {name:'Mary Landley'}];
let people8 = new Set(students8);
console.log(people8.has({name:"Dave Vasco"}));
//OutPUt: false