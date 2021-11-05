/**
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

Example 1:

Input: x = 121
Output: true
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Example 4:

Input: x = -101
Output: false


Constraints:

-231 <= x <= 231 - 1
*/
// https://leetcode.com/problems/palindrome-number/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let xStr = x.toString();
  let mid = Math.floor(xStr.toString().length / 2);
  if(xStr.length % 2 === 0){
    return xStr.substring(0,mid) === xStr.substring(mid,xStr.length).split("").reverse().join("");
  }
  else{
    return xStr.substring(0,mid) === xStr.substring(mid+1,xStr.length).split("").reverse().join("");;
  }
};

console.log(isPalindrome(000));
