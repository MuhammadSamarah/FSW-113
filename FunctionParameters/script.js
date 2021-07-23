//CLO1: JavaScript
let studentGrades = [90,80,88,98];
let curveGrages = function(grades,percentage){
    var newGrades = grades.map(grade => {
        return grade * percentage
    })
    return newGrades
};
var result = curveGrages(studentGrades);
console.log(result);
// OUTPUT: [NaN,NaN,NaN,NaN]


//CLO2: JavaScript
let studentGrades1 = [90,80,88,98];
let curveGrages1 = function(grades,percentage = 1.10){
    var newGrades1 = grades.map(grade => {
        return grade * percentage
    })
    return newGrades1
};
var result1 = curveGrages1(studentGrades1);
console.log(result1);
// OUTPUT: [99.00000000000001, 88, 96.80000000000001, 107.80000000000001]


//CLO3: JavaScript
let studentGrades2 = [90,80,88,98];
let curveGrages2 = function(grades,percentage = 1.10){
    var newGrades2 = grades.map(grade => {
        return grade * percentage
    })
    return newGrades2
};
var result2 = curveGrages2(studentGrades2,1.33);
console.log(result2);
// OUTPUT: [119.7, 106.4, 117.04, 130.34]


//CLO4: JavaScript
let studentGrades3 = [ 90, 80 , 88, 98]
let curveGrages3 = function(grades, percentage = 1.10){
   var newGrades3 = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades3
}
var result3 = curveGrages(studentGrades3)
//console.log(result3);
// OutPut: Undefined


//CLO5: JavaScript
let studentGrades4 = [ 90, 80 , 88, 98]
let curveGrages4 = function(grades, percentage = 1.10){
   var newGrades4 = grades.map(grade=> {
        return grade * percentage
    })
    return newGrades4
}
var result4 = curveGrages(studentGrades4)
//console.log(result3);
// OutPut: Undefined


//CLO5: javascript
let studentGrades5 = [ 90, 80 , 88, 98]
let curveGrages5 = function(grades, percentage = 1.10){
   var newGrades5 = grades.map(grade=>{
        return grade * percentage
    })
    return newGrades5
}
var result5 = curveGrages5(undefined,studentGrades5);
console.log(result5);
// OutPut: unavailable


//CLO6: JavaScript
let studentGrades6 = [ 90, 80 , 88, 98]
let curveGrages6 = function( grades, percentage = 1.10){
   var newGrades6 = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades6
}
var result6 = curveGrages6(undefined, studentGrades6)
console.log(result6)
// OUtPut: unavailable


//CLO7: javascript
let studentGrades7 = [ 90, 80 , 88, 98]
let percentageCurve7 = 0.98
let curveGrages7 = function( grades, percentage = percentageCurve7){
   var newGrades7 = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades7
}
var result7 = curveGrages(undefined, studentGrades7)
console.log(result7);
// OUtPut: unavailable


//CLO8: javascript
let studentGrades8 = [ 90, 80 , 88, 98]
const avg8 = function(array){
   let average8 = array.reduce((a, b) => a + b, 0)
   return average/array.length/100
}
let curveGrages8 = function(  percentage = avg8(studentGrades8),grades){
   var newGrades8 = grades.map( grade=> {
      return grade * percentage
    })
    return newGrades8
}
var result8 = curveGrages8(1.3, studentGrades8)
console.log(result8);
//Output: unavailable


//CLO9: Javascript
let studentGrades9 = [ 90, 80 , 88, 98]
const avg9 = function(array){
   let average9 = array.reduce((a, b) => a + b, 0)
   return average9/array.length/100
}
let curveGrages9 = function(  percentage = avg(studentGrades9),grades){
   var newGrades9 = grades.map( grade=> {
      return grade * percentage
    })
    return newGrades9
}
var result9 = curveGrages9(1.3, 68,56, studentGrades9)
console.log(result9);
//OUtPut :unavailable


//CLO9: javascript
let count10 = new Function("grades", "...grades.length");
var result10 = count([ 90, 80 , 88, 98]);
console.log(result10);
//OUtPUT: unavailable