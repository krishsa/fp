/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
    let queue = [];
    let max =0;
    for(let i =0; i < arr.length; i++){
        let current = arr[i];
        max = Math.max(queue.length, max);
        if(current !== 0 && queue.length === 0){ // nothing changes
            continue;
        }
        else if(queue.length === 0){ // first time zero
            queue.push(current);
            continue;
        }
        if(current === 0 && queue.length > 0){ // second time zero
            queue.push(current);
        }
        queue.push(current);
        let fromQ = queue.shift();
        arr[i] = fromQ;
        
    }
    console.log("max :"+ max + " Result :" + arr.join(","));
};
let seq1 = duplicateZeros([1,0,2,3,0,4,5,0]);
let seq2 = [1,0,0,2,3,0,0,4];
console.log(seq1.length === seq2.length && seq2.every((v, i) => v === seq1[i]));
 // [1,0,0,2,3,0,0,4]
duplicateZeros([1,2,3]);
duplicateZeros([0,1]);
duplicateZeros([1,0,0,0,0,0,1]);
duplicateZeros([1,0,4,4,5,6,2,4,5,2,3,2,23,52,52,526,2,5,2,5,2,5,5,2]);

// i=0; [1,0,2,3,0,4,5,0] ; a=undefined;
// i=1; [1,0,2,3,0,4,5,0] ; read from top a; replace current with a; push the current to a; (i==0 && a==undefined)?a=0: else a=0,0;
// i=2; [1,0,0,3,0,4,5,0] ; read from top a; a=2;
// i=3; [1,0,0,2,0,4,5,0] ; read from top a; a=3;
// i=4; [1,0,0,2,3,4,5,0] ; read from top a; a=0,0;
// i=5; [1,0,0,2,3,0,5,0] ; read from top a; a=0,4;
// i=6; [1,0,0,2,3,0,0,0] ; read from top a; a=4,6;
// i=7; [1,0,0,2,3,0,0,4] ; read from top a; a=4,6;


// 0,4 = a=3