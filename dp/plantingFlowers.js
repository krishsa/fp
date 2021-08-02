//3 10 3 1 2
// 9 10 9

const plantFlowers = arr => {
    let [firstElementInSubprocess, maxOfSubprocess] = [arr[0], arr[1]];
    for (let i = 2; i < arr.length; i++)
        [firstElementInSubprocess, maxOfSubprocess] = [maxOfSubprocess, Math.max(firstElementInSubprocess + arr[i], maxOfSubprocess)];
    return maxOfSubprocess;
}

console.log(plantFlowers([3, 10, 3, 1, 2]) === 12);
console.log(plantFlowers([9,10,9]) === 18);