const x = [1, 2];
function sum(a, b) {
    return a + b;
}
const y = sum(...x); // equivalent to sum(1,2,3)
console.log(y); // 6

const f = [1, 2, 3];
const g = [4, ...f, 5]; // [4,1,2,3,5]
const h = [...f, ...g];
console.log(h);

//.apply() takes arguments as an array
const _apply = sum.apply(0,x)
console.log(_apply)

//.call() takes arguments as comma separated values
const _call = sum.call(0,...x)
console.log(_call)



