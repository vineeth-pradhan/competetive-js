/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
Example 3:

Input: nums1 = [0,0], nums2 = [0,0]
Output: 0.00000
Example 4:

Input: nums1 = [], nums2 = [1]
Output: 1.00000
Example 5:

Input: nums1 = [2], nums2 = []
Output: 2.00000
 */
// https://leetcode.com/problems/median-of-two-sorted-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var mergedArray = [];
  var i = 0, j = 0;
  var median;
  while(nums1[i] !== undefined && nums2[j] !== undefined) {
    if(nums1[i] < nums2[j]) {
      mergedArray.push(nums1[i]);
      i++;
    }
    else {
      mergedArray.push(nums2[j]);
      j++;
    }
  }
  if(nums1[i] !== undefined) {
    while(nums1[i] !== undefined){
      mergedArray.push(nums1[i]);
      i++;
    }
  }
  else {
    while(nums2[j] !== undefined){
      mergedArray.push(nums2[j]);
      j++;
    }
  }
  if(mergedArray.length % 2 === 0){
    let mid = mergedArray.length / 2;
    median = (mergedArray[mid - 1] + mergedArray[mid])/2;
  }
  else {
    let mid = Math.floor(mergedArray.length / 2);
    median = mergedArray[mid];
  }
  return median;
};
console.log(findMedianSortedArrays([0, 0], [0, 0]));
