const fact = n => {
    if (n === 1 || n === 0) return 1;
    return fact(n - 1) + fact(n - 2)
}
const factMemoise = (n, cache={}) => {
    if (n === 1 || n === 0) return 1;
    if (cache[n]) return cache[n];
    return fact(n - 1, cache) + fact(n - 2, cache);
}
const factorialBottomUp = n => {
    let a = b = 1;
    for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
    return b;
}
// 0 1 2 3 4 5 6
// 1 1 2 3 5 8 13
console.log(factorialBottomUp(5) == 8);
console.log(fact(5) == 8);
console.log(factMemoise(5) == 8);
