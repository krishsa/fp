/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
    // Set p1 and p2 to point to the end of their respective arrays.
    let p1 = m - 1;
    let p2 = n - 1;
    
    // And move p backwards through the array, each time writing
    // the smallest value pointed at by p1 or p2.
    for (let p = m + n - 1; p >= 0; p--) {
        if (p2 < 0) {
            break;
        }
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            // console.log("nums1[p] :" + nums1[p] + " p1 :"+ p1 + " nums1[p1]:"+nums1[p1] + " nums2[p2]:"+nums2[p2]);
            nums1[p] = nums1[p1--];
        } else {
            nums1[p] = nums2[p2--];
        }
    }
    console.log("[" + nums1.join(",") + "]");
};
merge([1, 2, 6, 0, 0, 0], 3, [2, 5, 6], 3);
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([1, 2, 4, 5, 6, 0], 5, [3], 1);
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3)
merge([1], 1, [], 0);
merge([0], 0, [1], 1);
merge([2, 0], 1, [1], 1);