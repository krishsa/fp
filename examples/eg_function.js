console.log( "-------------------- Function Declaration --------------- ");
//Example 1
function test(){
    console.log("test called");
}
test();

//Example 2
const test1 = function (){
    console.log("test1 called");
}

test1();

//Example 3
const test2 = () => {
    console.log("test2 called");
}

test2();

//Example 4
const test3 = () => console.log("test3 called");

test3();

//Example 5
console.log( "-------------------- Function Call --------------- ");
function greet1(name) {
    console.log("Greet1 Welcome .. " + name);
}
greet1(); // returns undefined
greet1('Krishna');

//Example 6
const greet2 = function(name) {
    console.log("Greet2 Welcome .. " + name);
}
greet2('SPSA');

//Example 7
const greet3 = name => console.log("Greet3 Welcome .. " + name)
greet3('SPSenthil');

//Example 8
const greet4 = (name, age) => console.log("Greet3 Welcome .. " + name + " Age :"+ age)
greet4('SPSenthil', 28);

//Example 9
const greet5 = name => console.log("Greet3 Welcome .. " + name)
greet5('Senthil')

//Example 10
const service = name => ({"Hello " :  name });

const greet6 = name => console.log(service(name))
greet6("Krish")


module.exports = {
    greet1,
    greet5
}

