/*
A non-empty array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

function solution(A);

that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
the function should return 1.

Given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
the function should return 0.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [1..1,000,000,000].
Copyright 2009–2019 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
*/

function solution(A) {
  var dict = {};
  var max;

  for(let i = 0; i < A.length; i++){
    if(A[i] === 0 || dict.hasOwnProperty(A[i])) { return 0; }
    dict[A[i]] = '';
    if(!max || (A[i] > max)) { max = A[i]; }
  }

  for(let i = max; i >= 1; i--){
    if(!dict.hasOwnProperty(i)) { return 0; }
    delete dict[i];
  }

  if(Object.keys(dict).length > 0) {
    return 0;
  }

  return 1;
}

console.log(solution([1]))
