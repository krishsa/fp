console.log( "-------------------- Function Declaration --------------- ");
function test(){
    console.log("test called");
}
test();

const test1 = function (){
    console.log("test1 called");
}

test1();

const test2 = () => {
    console.log("test2 called");
}

test2();

const test3 = () => console.log("test3 called");
test3();


console.log( "-------------------- Function Call --------------- ");
function greet1(name) {
    console.log("Greet1 Welcome .. " + name);
}
greet1();
greet1('Krishna');

const greet2 = function(name) {
    console.log("Greet2 Welcome .. " + name);
}
greet2('SPSA');

const greet3 = name => console.log("Greet3 Welcome .. " + name)
greet3('SPSenthil');

const greet4 = (name, age) => console.log("Greet3 Welcome .. " + name + " Age :"+ age)
greet4('SPSenthil', 28);

const greet5 = name => console.log("Greet3 Welcome .. " + name)
greet5('Senthil')

const service = name => ({"Hello " :  name });

const greet6 = name => console.log(service(name))
greet6("Krish")


module.exports = {
    greet1,
    greet5
}

