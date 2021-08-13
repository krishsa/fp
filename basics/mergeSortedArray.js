/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

//  Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
//  Output: [1,2,2,3,5,6]
//  Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
//  The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

//  var merge = function(nums1, m, nums2, n) {

//     let si = 0;
//     let buf = undefined;
//     for(let i =0; i < m || si < n; i++){
//         if(buf && buf <= nums2[si]){
//             nums1[i] = buf;
//             buf = undefined;
//         }
//         else if(nums1[i] === 0){
//             nums1[i] = nums2[si];
//             si++;
//         }
//         else if (nums1[i] > nums2[si]){
//             buf = nums1[i];
//             nums1[i] = nums2[si];
//             si++;
//         }
//     }
//     console.log(nums1.join(","));
// };



var merge = function(nums1, m, nums2, n) {
    if(n === 0){
        return;
    }
    let i = 0; j = 0;
    let q =[];
    
    while(j < n || i < (m + n)){
        if(q.length === 0){
            if(nums1[i] <= nums2[j] && i < m){ // right array has greater element against left
                // i++;    
            }else{// right array has smaller element against left
                if(i < m) q.push(nums1[i]);
                nums1[i] = nums2[j];
                // i++; 
                j++;
            }
        }else{
            if(j < n && q[0] <= nums2[j]){ // right array has greater element against Q
                if(i < m) q.push(nums1[i]);
                nums1[i] = q.shift();
                // i++;//moved within queue and left array
            }else if(j < n ){ // right array has smaller element against Q
                if(i < m) q.push(nums1[i]);
                nums1[i] = nums2[j];
                // i++;
                j++;
            }else{//right array done, flush queue elements to left array
                if(i < m) q.push(nums1[i]);
                nums1[i] = q.shift();
                // i++;
            }
        }
        i++;       
    }
    console.log("[" + nums1.join(",") + "]");
};
merge([1,2,4,5,6,0],5,[3],1);
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([-1,0,0,3,3,3,0,0,0],6,[1,2,2], 3)
merge([1], 1, [], 0);
merge([0], 0, [1], 1);
merge([2, 0], 1, [1], 1);