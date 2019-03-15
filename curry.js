//Simple function --string
let dragon = (name, size, element) =>
name + ' is a ' +
size + ' dragon that breathes ' +
element + ' !';

console.log(dragon('Ceaser', 'small', 'fire'));


//Curried function --string
let dragon1 =
    name => 
     size =>
       element =>
        name + ' is a ' + size + ' dragon that breathes ' + element + ' !';

    console.log(dragon1('Sparkle')('big')('lighting'));

//Simple function - numbers
function addOld(a, b){
    return a + b;
}
let result = addOld(1,2);
console.log("result :" + result);


//Curried function - numbers
function add(a){
    return function(b){
        return a + b;
    }
}

const addMe = a => b => a + b;

let innerFunction = add(1);
result = innerFunction(2);
r = add(1)(3);


// result = add(2)(3);
console.log("Curried Add :" + result);
