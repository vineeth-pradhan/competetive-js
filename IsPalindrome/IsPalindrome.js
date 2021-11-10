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
  var decimalPlace = Math.floor(Math.log10(Math.abs(x)));
  d1 = x % 10;
  d2 = Math.floor(x / Math.pow(10, decimalPlace));
  while(d1 === d2) {
    x = x - Math.pow(10, decimalPlace);
    x = (x - (x % 10)) / 10
    d1 = x % 10;
    decimalPlace = Math.floor(Math.log10(Math.abs(x)));
    d2 = Math.floor(x / Math.pow(10, decimalPlace));
  }
  return d1 === d2
};

console.log(isPalindrome(1221));
