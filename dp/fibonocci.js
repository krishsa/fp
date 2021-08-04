const fibonocci = n => {
    if (n === 1 || n === 0) return 1;
    return fibonocci(n - 1) + fibonocci(n - 2)
}
const fibonocciMemoise = (n, cache={}) => {
    if (n === 1 || n === 0) return 1;
    if (cache[n]) return cache[n];
    else cache[n] = fibonocci(n - 1, cache) + fibonocci(n - 2, cache);
    return cache[n];
}
const fibonocciBottomUp = n => {
    let a = totalInSubprocess = 1;//first two elements are 1
    for (let i = 2; i <= n; i++) [a, totalInSubprocess] = [totalInSubprocess, a + totalInSubprocess];
    return totalInSubprocess;
}
// 0 1 2 3 4 5 6
// 1 1 2 3 5 8 13
console.log(fibonocciBottomUp(5) == 8);
console.log(fibonocci(5) == 8);
console.log(fibonocciMemoise(5) == 8);
