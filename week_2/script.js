//CLO1: JavaScript
var temp = () => 104;
console.log(typeof temp);
// OutPut: A) function
var temp = () => 104;
console.log(temp());
// OutPut: B) 104


//CLO2: JavaScript
var temp = multiplier => 104 * multiplier;
console.log(temp(2));
// OutPut: A) 208


//CLO3: JavaScript
var temp = (multiplier, devider) => 104 * multiplier/devider;
console.log(temp(3,6));
// OutPut: 1) 52


//CLO4: JavaScript
var temp = ( multiplier,divider ) => { //block
    let result = 104 * multiplier;
    if (result){
        result = 104 / divider;
    }
    return result;
}
console.log(temp(3,6));
// OutPut: 17.3333333333332


//CLO5: JavaScript
var clickButton = function('click',function(){
    console.log(this)
}
console.log(clickButton())

    






