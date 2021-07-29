//3 10 3 1 2
// 9 10 9

const plantFlowers = arr => {
    let [a, b] = [arr[0], arr[1]];
    for (let i = 2; i < arr.length; i++)
        [a, b] = [b, Math.max(a + arr[i], b)];
    return b;
}

console.log(plantFlowers([3, 10, 3, 1, 2]) === 12);
console.log(plantFlowers([9,10,9]) === 18);