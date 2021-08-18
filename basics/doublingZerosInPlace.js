/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    let queue = [];
    let zeroCounts = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCounts++;
        }
    }

    console.log("zeroCounts :"+zeroCounts);
    let prev = false;
    for (let i = arr.length -1; i >= 0; i--) { //[1,0,2,3,0,4,5]
        if(prev === true){
            arr[i] = 0;
            console.log("UPDATED PREV : arr[" + i + "] :" + arr[i] + " from :" + arr[i - zeroCounts] + " prev :" + prev);
            prev = false;
            i = i+ 1;
            continue;
        }else{
            arr[i] = arr[i - zeroCounts]; // [1,0,2,3,0,4, 0]

        }
        console.log("UPDATED : arr[" + i + "] :" + arr[i] + " from :" + arr[i - zeroCounts] + " prev :" + prev);
        prev = arr[i - zeroCounts] === 0 ? true : false;
        
    }
    console.log("Result :" + arr.join(","));
    // [1,0,2,3,0,4,5] => [1,0,0,2,3,0,0]

};
duplicateZeros([1, 0, 2, 3, 0, 4, 5]);
 // [1,0,0,2,3,0,0,4]
// duplicateZeros([1,2,3]);
// duplicateZeros([0,1]);
// duplicateZeros([1,0,0,0,0,0,1]);
// duplicateZeros([1,0,4,4,5,6,2,4,5,2,3,2,23,52,52,526,2,5,2,5,2,5,5,2]);

// i=0; [1,0,2,3,0,4,5,0] ; a=undefined;
// i=1; [1,0,2,3,0,4,5,0] ; read from top a; replace current with a; push the current to a; (i==0 && a==undefined)?a=0: else a=0,0;
// i=2; [1,0,0,3,0,4,5,0] ; read from top a; a=2;
// i=3; [1,0,0,2,0,4,5,0] ; read from top a; a=3;
// i=4; [1,0,0,2,3,4,5,0] ; read from top a; a=0,0;
// i=5; [1,0,0,2,3,0,5,0] ; read from top a; a=0,4;
// i=6; [1,0,0,2,3,0,0,0] ; read from top a; a=4,6;
// i=7; [1,0,0,2,3,0,0,4] ; read from top a; a=4,6;


// 0,4 = a=3