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