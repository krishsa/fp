//Simple function
const g = n => n + 1;
const f = n => n * 2;
const h = x => f(g(x));
console.log(h(20))

//Composition function
const g1 = n => n + 1;
const f1 = n => n * 2;

const compose = (f1, g1) => x => f1(g1(x));

// replace `x => f(g(x))` with `compose(f, g)`
const h1 = compose(f1, g1);

console.log(h1(20)); //=> 42